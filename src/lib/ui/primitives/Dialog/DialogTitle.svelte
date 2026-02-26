<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './dialog.css';

  let {
    children,
    class: className,
    elementType = 'h3',
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    elementType?: string;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'dialog-title', 'text-heading'));
</script>

<svelte:element this={elementType} class={classNames} {...rest}>
  {@render children?.()}
</svelte:element>
