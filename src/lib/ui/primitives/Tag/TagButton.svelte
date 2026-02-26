<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import AnchorOrButton from '../../utils/AnchorOrButton.svelte';
  import './tag.css';

  let {
    children,
    class: className,
    scheme = 'brand',
    variant = 'primary',
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    scheme?: 'brand' | 'danger' | 'positive' | 'warning' | 'neutral';
    variant?: 'primary' | 'secondary';
    href?: string;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(
    className,
    'tag',
    'tag-button',
    `tag-scheme-${scheme}`,
    `tag-variant-${variant}`,
  ));
</script>

<AnchorOrButton class={classNames} {...rest}>
  {@render children?.()}
</AnchorOrButton>
