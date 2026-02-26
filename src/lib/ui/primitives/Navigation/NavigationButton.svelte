<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import AnchorOrButton from '../../utils/AnchorOrButton.svelte';
  import './navigation.css';

  let {
    children,
    class: className,
    isSelected,
    icon,
    direction = 'column',
    size = 'medium',
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    isSelected?: boolean;
    icon?: Snippet;
    direction?: 'column' | 'row';
    size?: 'small' | 'medium';
    href?: string;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(
    className,
    'navigation-button',
    `navigation-button-direction-${direction}`,
    `navigation-button-size-${size}`,
  ));
</script>

<AnchorOrButton
  data-selected={isSelected || undefined}
  class={classNames}
  {...rest}
>
  {#if icon}
    {@render icon()}
  {/if}
  {@render children?.()}
</AnchorOrButton>
