<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './menu.css';

  let {
    children,
    class: className,
    textValue,
    isDisabled = false,
    onclick,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    textValue?: string;
    isDisabled?: boolean;
    onclick?: (e: MouseEvent) => void;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'menu-item'));
</script>

<div
  class={classNames}
  role="menuitem"
  aria-disabled={isDisabled}
  {onclick}
  {...rest}
>
  {@render children?.()}
</div>
