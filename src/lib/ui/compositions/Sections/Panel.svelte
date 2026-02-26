<script lang="ts">
  import type { Snippet } from 'svelte';
  import Flex from '../../layout/Flex/Flex.svelte';

  let {
    children,
    ...rest
  }: {
    children?: Snippet;
    [key: string]: any;
  } = $props();
</script>

<Flex container wrap {...rest}>
  {@render children?.()}
</Flex>
