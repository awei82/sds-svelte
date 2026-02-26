<script lang="ts">
  import type { Snippet } from 'svelte';
  import Flex from '../../layout/Flex/Flex.svelte';
  import Button from '../../primitives/Button/Button.svelte';
  import ButtonGroup from '../../primitives/Button/ButtonGroup.svelte';
  import TextHeading from '../../primitives/Text/TextHeading.svelte';
  import TextList from '../../primitives/Text/TextList.svelte';
  import TextListItem from '../../primitives/Text/TextListItem.svelte';
  import TextPrice from '../../primitives/Text/TextPrice.svelte';
  import Card from './Card.svelte';

  let {
    heading,
    action,
    actionVariant = 'primary',
    actionIcon,
    actionDisabled = false,
    onAction,
    price,
    priceCurrency,
    priceLabel = '/ mo',
    size = 'large',
    variant = 'stroke',
    list,
    listSlot,
    ...rest
  }: {
    heading: string;
    action: string;
    actionVariant?: 'primary' | 'neutral' | 'subtle';
    actionIcon?: Snippet;
    actionDisabled?: boolean;
    onAction: () => void;
    price: string;
    priceCurrency: string;
    priceLabel?: string;
    size?: 'small' | 'large';
    variant?: 'default' | 'stroke' | 'brand';
    list?: string[];
    listSlot?: Snippet;
    [key: string]: any;
  } = $props();
</script>

<Card
  {...rest}
  {variant}
  padding={size === 'large' ? '800' : '600'}
  direction="vertical"
>
  <Flex
    direction={size === 'large' ? 'column' : 'row'}
    alignPrimary={size === 'large' ? 'center' : 'space-between'}
    alignSecondary="center"
    gap={size === 'large' ? '400' : undefined}
  >
    <TextHeading>{heading}</TextHeading>
    <TextPrice
      {size}
      label={priceLabel}
      currency={priceCurrency}
      {price}
    />
  </Flex>
  {#if list}
    <TextList density={size === 'large' ? 'default' : 'tight'}>
      {#each list as item}
        <TextListItem>{item}</TextListItem>
      {/each}
    </TextList>
  {:else if listSlot}
    {@render listSlot()}
  {/if}

  <Flex alignPrimary="stretch">
    <ButtonGroup align="justify">
      <Button
        disabled={actionDisabled}
        variant={actionVariant}
        onclick={onAction}
      >
        {action}
        {#if actionIcon}
          {@render actionIcon()}
        {/if}
      </Button>
    </ButtonGroup>
  </Flex>
</Card>
