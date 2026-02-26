<script lang="ts">
  import { isMobile, isDesktop } from '$lib/ui/hooks/useMediaQuery';
  import Section from '$lib/ui/layout/Section/Section.svelte';
  import Flex from '$lib/ui/layout/Flex/Flex.svelte';
  import FlexItem from '$lib/ui/layout/Flex/FlexItem.svelte';
  import Image from '$lib/ui/primitives/Image/Image.svelte';
  import TextHeading from '$lib/ui/primitives/Text/TextHeading.svelte';
  import TextPrice from '$lib/ui/primitives/Text/TextPrice.svelte';
  import Text from '$lib/ui/primitives/Text/Text.svelte';
  import Tag from '$lib/ui/primitives/Tag/Tag.svelte';
  import Button from '$lib/ui/primitives/Button/Button.svelte';
  import SelectField from '$lib/ui/primitives/Select/SelectField.svelte';
  import SelectItem from '$lib/ui/primitives/Select/SelectItem.svelte';
  import Accordion from '$lib/ui/primitives/Accordion/Accordion.svelte';
  import AccordionItem from '$lib/ui/primitives/Accordion/AccordionItem.svelte';
  import IconShoppingBag from '$lib/ui/icons/IconShoppingBag.svelte';

  type SectionPadding = '600' | '800' | '1200' | '1600' | '4000';
  type FlexGap = '100' | '200' | '300' | '400' | '600' | '800' | '1200' | '1600';

  let flexGap: FlexGap = $derived($isMobile ? '600' : '1200');
  let sectionPadding: SectionPadding = $derived($isMobile ? '600' : '1600');
</script>

<Section padding={sectionPadding} variant="stroke">
  <Flex container type="half" wrap gap={flexGap}>
    <Image
      src="https://picsum.photos/seed/Modern office/1200/900"
      alt="Modern office chair in black"
      size="large"
      aspectRatio="4-3"
    />
    <FlexItem size="half">
      <Flex direction="column" gap="400" alignSecondary="stretch">
        <Flex alignSecondary="center" gap="200">
          <TextHeading>Ergonomic Office Chair</TextHeading>
          <Tag variant="secondary" scheme="positive" class="promo-tag">
            30% Off
          </Tag>
        </Flex>
        <FlexItem>
          <Flex direction="column" gap="200">
            <TextPrice currency="$" price="129.99" />
          </Flex>
        </FlexItem>
        <Text>
          Experience all-day comfort with our Ergonomic Office Chair,
          featuring adjustable lumbar support, breathable mesh back, and
          smooth-rolling casters. Perfect for home or office use.
        </Text>
        <FlexItem>
          <Flex
            wrap
            gap="200"
            direction={$isDesktop ? 'row' : 'column'}
            alignSecondary={$isDesktop ? 'end' : 'stretch'}
          >
            <FlexItem size="fill">
              <SelectField
                label="Color"
                value="Black"
              >
                <SelectItem value="Black">Black</SelectItem>
                <SelectItem value="Gray">Gray</SelectItem>
                <SelectItem value="Blue">Blue</SelectItem>
                <SelectItem value="Red">Red</SelectItem>
                <SelectItem value="White">White</SelectItem>
              </SelectField>
            </FlexItem>
            <FlexItem size="fill">
              <SelectField
                label="Quantity"
                value="1"
              >
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectField>
            </FlexItem>
            <Button variant="primary">
              Add
              <IconShoppingBag />
            </Button>
          </Flex>
        </FlexItem>
        <Accordion>
          <AccordionItem title="Product Details">
            <ul>
              <li>Adjustable height and tilt</li>
              <li>Breathable mesh backrest</li>
              <li>360° swivel base</li>
              <li>Weight capacity: 250 lbs</li>
              <li>Easy assembly required</li>
            </ul>
          </AccordionItem>
        </Accordion>
      </Flex>
    </FlexItem>
  </Flex>
</Section>
