<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './text.css';

  let {
    children,
    class: className,
    elementType = 'h3',
    lineClamp,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    elementType?: string;
    lineClamp?: number;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(
    className,
    !!lineClamp && 'text-truncate',
    'text-heading',
  ));

  let style = $derived(lineClamp ? `--text-truncate-line-clamp: ${lineClamp}` : undefined);
</script>

<svelte:element this={elementType} class={classNames} {style} {...rest}>
  {@render children?.()}
</svelte:element>
