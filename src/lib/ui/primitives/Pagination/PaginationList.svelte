<script lang="ts">
  import type { Snippet } from 'svelte';
  import './pagination.css';

  let {
    children,
    visible = true,
  }: {
    children?: Snippet;
    visible?: boolean;
  } = $props();
</script>

{#if visible}
  <span class="pagination-list">
    {@render children?.()}
  </span>
{/if}
