<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './table.css';

  let {
    children,
    class: className,
    align = 'start',
    allowsSorting = false,
    sortDirection,
    onclick,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    align?: 'start' | 'center' | 'right';
    allowsSorting?: boolean;
    sortDirection?: 'ascending' | 'descending';
    onclick?: (e: MouseEvent) => void;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'table-column', `table-align-${align}`));
</script>

<th class={classNames} aria-sort={sortDirection} {onclick} {...rest}>
  <div class="table-column-inner">
    {@render children?.()}
    {#if allowsSorting}
      <span aria-hidden="true" class="sort-indicator">
        {#if sortDirection === 'ascending'}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 10L8 6L12 10" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        {:else}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6L8 10L12 6" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        {/if}
      </span>
    {/if}
  </div>
</th>
