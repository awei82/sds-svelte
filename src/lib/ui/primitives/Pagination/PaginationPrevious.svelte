<script lang="ts">
  import type { Snippet } from 'svelte';
  import '../Button/button.css';
  import './pagination.css';

  let {
    children,
    href = null,
  }: {
    children?: Snippet;
    href?: string | null;
  } = $props();
</script>

{#if href}
  <a {href} class="button button-size-medium button-variant-subtle" aria-label="Previous page">
    <svg class="icon icon-size-16" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.78 12.53a.75.75 0 0 1-1.06 0L2.47 8.28a.75.75 0 0 1 0-1.06l4.25-4.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L4.81 7h7.44a.75.75 0 0 1 0 1.5H4.81l2.97 2.97a.75.75 0 0 1 0 1.06Z" fill="currentColor"/>
    </svg>
    {@render children?.()}
  </a>
{:else}
  <button class="button button-size-medium button-variant-subtle" aria-label="Previous page" disabled>
    <svg class="icon icon-size-16" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.78 12.53a.75.75 0 0 1-1.06 0L2.47 8.28a.75.75 0 0 1 0-1.06l4.25-4.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L4.81 7h7.44a.75.75 0 0 1 0 1.5H4.81l2.97 2.97a.75.75 0 0 1 0 1.06Z" fill="currentColor"/>
    </svg>
    {@render children?.()}
  </button>
{/if}
