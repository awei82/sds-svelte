<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './table.css';

  let {
    children,
    class: className,
    align = 'start',
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    align?: 'start' | 'center' | 'right';
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'table-cell', `table-align-${align}`));
</script>

<td class={classNames} {...rest}>
  {@render children?.()}
</td>
