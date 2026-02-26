<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './text.css';

  let {
    children,
    class: className,
    elementType = 'code',
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    elementType?: string;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'text-body-code'));
</script>

<svelte:element this={elementType} class={classNames} {...rest}>
  {@render children?.()}
</svelte:element>
