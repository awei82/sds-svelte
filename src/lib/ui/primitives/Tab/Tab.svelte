<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './tab.css';

  let {
    children,
    class: className,
    id,
    isSelected = false,
    isDisabled = false,
    onclick,
    controls,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    id?: string;
    isSelected?: boolean;
    isDisabled?: boolean;
    onclick?: (e: MouseEvent) => void;
    controls?: string;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'tab'));
</script>

<button
  class={classNames}
  role="tab"
  {id}
  aria-selected={isSelected}
  aria-controls={controls}
  aria-disabled={isDisabled}
  disabled={isDisabled}
  tabindex={isSelected ? 0 : -1}
  {onclick}
  type="button"
  {...rest}
>
  {@render children?.()}
</button>
