<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './tag.css';

  let {
    children,
    class: className,
    iconStart,
    isSelected = false,
    textValue,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    iconStart?: Snippet;
    isSelected?: boolean;
    textValue?: string;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'tag', 'tag-toggle'));
</script>

<button
  class={classNames}
  role="option"
  aria-selected={isSelected}
  data-selected={isSelected || undefined}
  {...rest}
>
  {#if iconStart}
    {@render iconStart?.()}
  {/if}
  {@render children?.()}
</button>
