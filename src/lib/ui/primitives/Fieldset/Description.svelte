<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './fieldset.css';

  let {
    children,
    class: className,
    elementType = 'p',
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    elementType?: string;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'description'));
</script>

<svelte:element this={elementType} class={classNames} {...rest}>
  {@render children?.()}
</svelte:element>
