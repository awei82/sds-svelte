<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './table.css';

  let {
    children,
    class: className,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'table-head'));
</script>

<thead class={classNames} {...rest}>
  {@render children?.()}
</thead>
