<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './dialog.css';

  let {
    children,
    class: className,
    isOpen = false,
    isDismissable = false,
    onClose,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    isOpen?: boolean;
    isDismissable?: boolean;
    onClose?: () => void;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'dialog-backdrop'));

  function handleBackdropClick(e: MouseEvent) {
    if (isDismissable && e.target === e.currentTarget) {
      onClose?.();
    }
  }

  function handleKeydown(e: KeyboardEvent) {
    if (isDismissable && e.key === 'Escape') {
      onClose?.();
    }
  }
</script>

{#if isOpen}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class={classNames} onclick={handleBackdropClick} onkeydown={handleKeydown} {...rest}>
    <div class="dialog-container">
      {@render children?.()}
    </div>
  </div>
{/if}
