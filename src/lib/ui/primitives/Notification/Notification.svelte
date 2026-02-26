<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './notification.css';
  import '../IconButton/iconButton.css';
  import '../Button/button.css';

  let {
    children,
    class: className,
    isDismissible = false,
    icon,
    variant = 'message',
    ondismiss,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    isDismissible?: boolean;
    icon?: Snippet;
    variant?: 'message' | 'alert';
    ondismiss?: () => void;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(
    className,
    'notification',
    `notification-variant-${variant}`,
  ));
</script>

<div class={classNames} {...rest}>
  {#if icon}
    <span class="notification-icon">{@render icon()}</span>
  {/if}
  <div class="notification-content">
    {@render children?.()}
  </div>
  {#if isDismissible}
    {#if variant === 'alert'}
      <button
        class="icon-button button button-size-small button-variant-danger-subtle"
        aria-label="Dismiss notification"
        onclick={ondismiss}
      >
        <svg class="icon icon-size-16" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.75.75 0 1 1 1.06 1.06L9.06 8l3.22 3.22a.75.75 0 1 1-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 0 1-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z" fill="currentColor"/>
        </svg>
      </button>
    {:else}
      <button
        class="icon-button button button-size-small button-variant-subtle"
        aria-label="Dismiss notification"
        onclick={ondismiss}
      >
        <svg class="icon icon-size-16" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.75.75 0 1 1 1.06 1.06L9.06 8l3.22 3.22a.75.75 0 1 1-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 0 1-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z" fill="currentColor"/>
        </svg>
      </button>
    {/if}
  {/if}
</div>
