<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    children,
    ...rest
  }: {
    children?: Snippet;
    [key: string]: any;
  } = $props();
</script>

<div class="menu-trigger" {...rest}>
  {@render children?.()}
</div>
