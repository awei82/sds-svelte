<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import AnchorOrButton from '../../utils/AnchorOrButton.svelte';
  import './navigation.css';

  let {
    children,
    class: className,
    isSelected,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    isSelected?: boolean;
    href?: string;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'navigation-pill'));
</script>

<AnchorOrButton
  data-selected={isSelected || undefined}
  class={classNames}
  {...rest}
>
  {@render children?.()}
</AnchorOrButton>
