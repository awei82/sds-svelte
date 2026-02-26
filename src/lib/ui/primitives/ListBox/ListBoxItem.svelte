<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './listBox.css';

  let {
    children,
    class: className,
    textValue,
    isSelected = false,
    isDisabled = false,
    onclick,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    textValue?: string;
    isSelected?: boolean;
    isDisabled?: boolean;
    onclick?: (e: MouseEvent) => void;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'list-box-item'));
</script>

<div
  class={classNames}
  role="option"
  aria-selected={isSelected}
  aria-disabled={isDisabled}
  {onclick}
  {...rest}
>
  {@render children?.()}
</div>
