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
  <a {href} class="button button-size-medium button-variant-subtle" aria-label="Next page">
    {@render children?.()}
    <svg class="icon icon-size-16" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.22 3.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L11.19 9H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.53a.75.75 0 0 1 0-1.06Z" fill="currentColor"/>
    </svg>
  </a>
{:else}
  <button class="button button-size-medium button-variant-subtle" aria-label="Next page" disabled>
    {@render children?.()}
    <svg class="icon icon-size-16" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.22 3.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L11.19 9H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.53a.75.75 0 0 1 0-1.06Z" fill="currentColor"/>
    </svg>
  </button>
{/if}
