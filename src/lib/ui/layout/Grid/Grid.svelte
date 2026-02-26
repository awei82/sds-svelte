<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './grid.css';

  let {
    children,
    class: className,
    columns = 'none',
    rows = 'none',
    gap,
    columnGap,
    rowGap,
    flow,
    container = false,
    justifyItems = 'stretch',
    alignItems = 'stretch',
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    columns?: string;
    rows?: string;
    gap?: '100' | '200' | '300' | '400' | '600' | '800' | '1200' | '1600';
    columnGap?: '100' | '200' | '300' | '400' | '600' | '800' | '1200' | '1600';
    rowGap?: '100' | '200' | '300' | '400' | '600' | '800' | '1200' | '1600';
    flow?: 'row' | 'column' | 'row dense' | 'column dense';
    container?: boolean;
    justifyItems?: 'start' | 'end' | 'center' | 'stretch';
    alignItems?: 'start' | 'end' | 'center' | 'stretch';
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(
    className,
    'grid',
    container && 'grid-container',
    `grid-justify-items-${justifyItems}`,
    `grid-align-items-${alignItems}`,
    gap && `grid-gap-${gap}`,
    columnGap && `grid-column-gap-${columnGap}`,
    rowGap && `grid-row-gap-${rowGap}`,
    flow && `grid-flow-${flow.replace(' ', '-')}`,
  ));

  let gridStyle = $derived(
    [
      `display: grid`,
      `grid-template-columns: ${columns}`,
      `grid-template-rows: ${rows}`,
      gap ? `gap: var(--sds-size-space-${gap})` : null,
      columnGap ? `column-gap: var(--sds-size-space-${columnGap})` : null,
      rowGap ? `row-gap: var(--sds-size-space-${rowGap})` : null,
      `justify-items: ${justifyItems}`,
      `align-items: ${alignItems}`,
    ].filter(Boolean).join('; ')
  );
</script>

<div class={classNames} style={gridStyle} {...rest}>
  {@render children?.()}
</div>
