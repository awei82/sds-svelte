<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './text.css';

  let {
    children,
    class: className,
    elementType = 'small',
    lineHeight = 'body',
    lineClamp,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    elementType?: string;
    lineHeight?: 'body' | 'single';
    lineClamp?: number;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(
    className,
    !!lineClamp && 'text-truncate',
    'text-body-small',
    `text-line-height-${lineHeight}`,
  ));

  let style = $derived(lineClamp ? `--text-truncate-line-clamp: ${lineClamp}` : undefined);
</script>

<svelte:element this={elementType} class={classNames} {style} {...rest}>
  {@render children?.()}
</svelte:element>
