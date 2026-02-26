<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './select.css';

  let {
    children,
    class: className,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'select'));
</script>

<select class={classNames} {...rest}>
  {@render children?.()}
</select>
