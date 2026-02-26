<script lang="ts">
  import type { Snippet } from 'svelte';
  import Flex from '../../layout/Flex/Flex.svelte';
  import Text from '../../primitives/Text/Text.svelte';
  import TextStrong from '../../primitives/Text/TextStrong.svelte';
  import TextSubheading from '../../primitives/Text/TextSubheading.svelte';
  import Card from './Card.svelte';

  let {
    asset,
    heading,
    price,
    description,
    rating,
    ...rest
  }: {
    asset?: Snippet;
    heading: string;
    price: string;
    description: string;
    rating: number;
    [key: string]: any;
  } = $props();
</script>

<Card
  {...rest}
  padding="600"
  direction="vertical"
  variant="stroke"
  {asset}
>
  <Flex direction="column" gap="200">
    <TextSubheading lineClamp={1}>{heading}</TextSubheading>
    <TextStrong>${price} ({rating} rating)</TextStrong>
    <Text lineClamp={2}>{description}</Text>
  </Flex>
</Card>
