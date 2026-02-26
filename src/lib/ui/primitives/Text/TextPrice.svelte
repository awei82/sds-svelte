<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './text.css';

  let {
    children,
    class: className,
    currency,
    size = 'large',
    price,
    label,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    currency: string;
    size?: 'small' | 'large';
    price: string;
    label?: string;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'text-price', `text-price-size-${size}`));
</script>

<p class={classNames} {...rest}>
  {#if size === 'small'}
    <span class="text-heading">
      <sup class="text-price-currency">{currency}</sup>{price}
    </span>
  {:else}
    <span class="text-title-page">
      <sup class="text-price-currency">{currency}</sup>{price}
    </span>
  {/if}
  {#if label}
    <small class="text-body-small">{label}</small>
  {/if}
</p>
