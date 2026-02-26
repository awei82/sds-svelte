<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    href,
    children,
    class: className,
    ...rest
  }: {
    href?: string;
    children?: Snippet;
    class?: string;
    [key: string]: any;
  } = $props();
</script>

{#if href}
  <a {href} class={className} {...rest}>
    {@render children?.()}
  </a>
{:else}
  <button class={className} {...rest}>
    {@render children?.()}
  </button>
{/if}
