<script lang="ts">
  import { isMobile } from '$lib/ui/hooks/useMediaQuery';
  import { pricingStore } from '$lib/data/stores/pricing';
  import Section from '$lib/ui/layout/Section/Section.svelte';
  import Flex from '$lib/ui/layout/Flex/Flex.svelte';
  import FlexItem from '$lib/ui/layout/Flex/FlexItem.svelte';
  import Navigation from '$lib/ui/primitives/Navigation/Navigation.svelte';
  import NavigationPill from '$lib/ui/primitives/Navigation/NavigationPill.svelte';
  import PricingCard from '$lib/ui/compositions/Cards/PricingCard.svelte';
  import type { PricingPlan } from '$lib/data/types/pricing';

  let pricingInterval: 'monthly' | 'yearly' = $state('monthly');

  type SectionPadding = '600' | '800' | '1200' | '1600' | '4000';
  type FlexGap = '100' | '200' | '300' | '400' | '600' | '800' | '1200' | '1600';
  type CardSize = 'small' | 'large';

  let sectionPadding: SectionPadding = $derived($isMobile ? '600' : '1600');
  let flexGap: FlexGap = $derived($isMobile ? '600' : '1200');

  let monthlyPlans: PricingPlan[] = $state([]);
  let annualPlans: PricingPlan[] = $state([]);
  let currentPlan: PricingPlan | null = $state(null);
  let isLoading = $state(false);

  pricingStore.monthlyPlans.subscribe((v) => (monthlyPlans = v));
  pricingStore.annualPlans.subscribe((v) => (annualPlans = v));
  pricingStore.currentPlan.subscribe((v) => (currentPlan = v));
  pricingStore.isLoading.subscribe((v) => (isLoading = v));

  let options = $derived(pricingInterval === 'monthly' ? monthlyPlans : annualPlans);

  function pricingPlanToPricingCardProps(
    plan: PricingPlan,
    index: number,
    current: PricingPlan | null,
  ) {
    const isActive = current?.id === plan.id;
    const level = parseInt(plan.sku.split('-')[0]);
    const levelCurrent = current ? parseInt(current.sku.split('-')[0]) : null;
    const levelUpgrade = levelCurrent !== null && levelCurrent < level;
    const levelDowngrade = levelCurrent !== null && levelCurrent > level;
    const goAnnual = levelCurrent === level && current?.interval === 'month';
    const goMonthly = levelCurrent === level && current?.interval === 'year';
    const action = isActive
      ? 'Current Plan'
      : levelUpgrade
        ? `Upgrade to ${plan.name}`
        : levelDowngrade
          ? `Downgrade to ${plan.name}`
          : goAnnual
            ? 'Go Annual'
            : goMonthly
              ? 'Go Monthly'
              : `Select ${plan.name}`;
    return {
      list: plan.features,
      heading: plan.name,
      priceCurrency: plan.currency,
      action,
      actionDisabled: isActive,
      actionVariant: (index === 1 ? 'neutral' : 'primary') as 'primary' | 'neutral',
      variant: (index === 1 ? 'brand' : 'stroke') as 'brand' | 'stroke',
      price: plan.price.toString(),
      priceLabel: plan.interval === 'month' ? '/ mo' : '/ yr',
      onAction: () => pricingStore.setCurrentPlan(plan),
    };
  }

  let cardSize: CardSize = $derived($isMobile ? 'small' : 'large');
</script>

<Section padding={sectionPadding} variant="stroke">
  <Flex container gap={flexGap} direction="column" alignSecondary="stretch">
    <FlexItem>
      <Flex alignPrimary="center">
        <Navigation direction="row">
          <NavigationPill
            onclick={() => (pricingInterval = 'monthly')}
            isSelected={pricingInterval === 'monthly'}
          >
            Monthly
          </NavigationPill>
          <NavigationPill
            onclick={() => (pricingInterval = 'yearly')}
            isSelected={pricingInterval === 'yearly'}
          >
            Yearly
          </NavigationPill>
        </Navigation>
      </Flex>
    </FlexItem>
    <FlexItem>
      <Flex wrap type="third" gap="1200">
        {#if isLoading}
          <PricingCard heading="" action="" priceCurrency="" price="" onAction={() => {}} size={cardSize} />
          <PricingCard heading="" action="" priceCurrency="" price="" onAction={() => {}} size={cardSize} />
          <PricingCard heading="" action="" priceCurrency="" price="" onAction={() => {}} size={cardSize} />
        {:else}
          {#each options as option, i}
            {@const props = pricingPlanToPricingCardProps(option, i, currentPlan)}
            <PricingCard
              {...props}
              size={cardSize}
            />
          {/each}
        {/if}
      </Flex>
    </FlexItem>
  </Flex>
</Section>
