<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './tag.css';

  let {
    children,
    class: className,
    scheme = 'brand',
    variant = 'primary',
    onRemove,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    scheme?: 'brand' | 'danger' | 'positive' | 'warning' | 'neutral';
    variant?: 'primary' | 'secondary';
    onRemove?: (e: MouseEvent) => void;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(
    'tag',
    `tag-scheme-${scheme}`,
    `tag-variant-${variant}`,
  ));
</script>

<span class={classNames} {...rest}>
  {@render children?.()}
  {#if onRemove}
    <button class="tag-remove-button" onclick={onRemove}>
      <svg class="icon icon-size-16" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.75.75 0 1 1 1.06 1.06L9.06 8l3.22 3.22a.75.75 0 1 1-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 0 1-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z" fill="currentColor"/>
      </svg>
    </button>
  {/if}
</span>
