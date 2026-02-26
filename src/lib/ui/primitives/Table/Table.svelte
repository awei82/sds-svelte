<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './table.css';

  let {
    children,
    class: className,
    bleed = false,
    dense = false,
    grid = false,
    striped = false,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    bleed?: boolean;
    dense?: boolean;
    grid?: boolean;
    striped?: boolean;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(
    className,
    'table',
    bleed && 'table-bleed',
    dense && 'table-dense',
    grid && 'table-grid',
    striped && 'table-striped',
  ));
</script>

<table class={classNames} {...rest}>
  {@render children?.()}
</table>
