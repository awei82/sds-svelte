<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './menu.css';

  let {
    children,
    class: className,
    label,
    variant = 'neutral',
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    label?: string;
    variant?: 'primary' | 'neutral' | 'subtle';
    [key: string]: any;
  } = $props();

  let isOpen = $state(false);

  function handleToggle() {
    isOpen = !isOpen;
  }

  function handleClose() {
    isOpen = false;
  }

  let classNames = $derived(clsx(className, 'menu-button-container'));
</script>

<div class={classNames} {...rest}>
  <button
    class={clsx('button', `button-variant-${variant}`, 'button-size-medium')}
    onclick={handleToggle}
    aria-expanded={isOpen}
    aria-haspopup="menu"
    type="button"
  >
    {label}
  </button>
  {#if isOpen}
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="menu-popover" onkeydown={(e) => e.key === 'Escape' && handleClose()}>
      <div class="menu" role="menu">
        {@render children?.()}
      </div>
    </div>
  {/if}
</div>
