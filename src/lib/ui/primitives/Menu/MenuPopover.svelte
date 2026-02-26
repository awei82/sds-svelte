<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './menu.css';

  let {
    children,
    class: className,
    placement,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    placement?: string;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'menu-popover'));
</script>

<div class={classNames} {...rest}>
  {@render children?.()}
</div>
