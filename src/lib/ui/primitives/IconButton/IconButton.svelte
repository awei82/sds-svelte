<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './iconButton.css';
  import '../Button/button.css';

  let {
    children,
    class: className,
    href,
    size = 'medium',
    variant = 'primary',
    type = 'button',
    disabled,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    href?: string;
    size?: 'small' | 'medium';
    variant?: 'primary' | 'neutral' | 'subtle';
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    'aria-label': string;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(
    className,
    'icon-button',
    'button',
    `button-size-${size}`,
    `button-variant-${variant}`,
  ));
</script>

{#if href}
  <a {href} class={classNames} {...rest}>
    {@render children?.()}
  </a>
{:else}
  <button {type} {disabled} class={classNames} {...rest}>
    {@render children?.()}
  </button>
{/if}
