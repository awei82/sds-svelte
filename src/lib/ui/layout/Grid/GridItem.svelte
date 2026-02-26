<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';

  let {
    children,
    class: className,
    column,
    row,
    area,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    column?: string;
    row?: string;
    area?: string;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(
    className,
    'grid-item',
  ));

  let gridItemStyle = $derived(
    [
      column ? `grid-column: ${column}` : null,
      row ? `grid-row: ${row}` : null,
      area ? `grid-area: ${area}` : null,
    ].filter(Boolean).join('; ')
  );
</script>

<div class={classNames} style={gridItemStyle || undefined} {...rest}>
  {@render children?.()}
</div>
