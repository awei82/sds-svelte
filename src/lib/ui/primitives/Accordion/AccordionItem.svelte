<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';

  let {
    children,
    class: className,
    title,
    isExpanded = false,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    title?: string;
    isExpanded?: boolean;
    [key: string]: any;
  } = $props();

  let open = $state(isExpanded);

  function handleToggle() {
    open = !open;
  }

  let classNames = $derived(clsx(className, 'accordion-item'));
</script>

<div class={classNames} data-expanded={open ? '' : undefined} {...rest}>
  <h3 class="accordion-item-title">
    <button onclick={handleToggle} aria-expanded={open}>
      {title}
      <span
        role="img"
        aria-hidden="true"
        aria-label="accordion item indicator"
        class="accordion-item-indicator"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none">
          <path d="M4 6L8 10L12 6" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </button>
  </h3>
  <div class="accordion-item-content">
    {@render children?.()}
  </div>
</div>
