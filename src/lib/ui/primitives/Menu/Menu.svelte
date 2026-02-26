<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './menu.css';

  let {
    children,
    class: className,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'menu'));
</script>

<div class={classNames} role="menu" {...rest}>
  {@render children?.()}
</div>
