<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './tooltip.css';

  let {
    children,
    class: className,
    offset = 16,
    isOpen = false,
    placement = 'top',
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    offset?: number;
    isOpen?: boolean;
    placement?: 'top' | 'bottom' | 'left' | 'right';
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'tooltip'));
</script>

{#if isOpen}
  <div class={classNames} role="tooltip" data-placement={placement} {...rest}>
    <div class="tooltip-overlay-arrow">
      <svg viewBox="0 0 10 5">
        <path d="M0 0 L5 5 L10 0" />
      </svg>
      <svg viewBox="0 0 10 5">
        <path d="M0 0 L5 5 L10 0" />
      </svg>
    </div>
    <div class="dialog">
      {@render children?.()}
    </div>
  </div>
{/if}
