<script lang="ts">
  import type { Snippet } from 'svelte';
  import Flex from '../../layout/Flex/Flex.svelte';
  import Section from '../../layout/Section/Section.svelte';

  let {
    children,
    flexProps = {},
    ...sectionProps
  }: {
    children?: Snippet;
    flexProps?: Record<string, any>;
    [key: string]: any;
  } = $props();
</script>

<Section padding="1600" {...sectionProps}>
  <Flex
    container
    alignPrimary="center"
    alignSecondary="center"
    direction="column"
    gap="600"
    {...flexProps}
  >
    {@render children?.()}
  </Flex>
</Section>
