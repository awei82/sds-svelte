<script lang="ts">
  import type { Snippet } from 'svelte';
  import Flex from '../../layout/Flex/Flex.svelte';
  import TextHeading from '../../primitives/Text/TextHeading.svelte';
  import TextSmall from '../../primitives/Text/TextSmall.svelte';
  import Card from './Card.svelte';

  let {
    icon,
    stat,
    description,
    ...rest
  }: {
    icon?: Snippet;
    stat: string;
    description: string;
    [key: string]: any;
  } = $props();
</script>

<Card
  {...rest}
  padding="600"
  direction="vertical"
  variant="stroke"
  align="center"
>
  {#if icon}
    {@render icon()}
  {/if}
  <Flex direction="column" alignSecondary="center" gap="100">
    <TextHeading>{stat}</TextHeading>
    {#if description}
      <TextSmall>{description}</TextSmall>
    {/if}
  </Flex>
</Card>
