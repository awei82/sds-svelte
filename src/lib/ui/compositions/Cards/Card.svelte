<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import { isMobile } from '../../../ui/hooks/useMediaQuery';
  import AnchorOrButton from '../../utils/AnchorOrButton.svelte';
  import './cards.css';

  let {
    children,
    class: className,
    align = 'start',
    direction = 'vertical',
    interactionProps,
    variant = 'default',
    asset,
    padding,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    align?: 'start' | 'center' | 'end';
    direction?: 'horizontal' | 'vertical';
    interactionProps?: Record<string, any>;
    variant?: 'default' | 'stroke' | 'brand';
    asset?: Snippet;
    padding?: '600' | '800';
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(
    className,
    'card',
    `card-align-${align}`,
    `card-direction-${$isMobile ? 'vertical' : direction}`,
    `card-padding-${padding ? padding : '0'}`,
    `card-variant-${variant}`,
  ));
</script>

<div class={classNames} {...rest}>
  {#if asset}
    <div class="card-asset">{@render asset()}</div>
  {/if}
  <div class="card-content">
    {@render children?.()}
  </div>
  {#if interactionProps}
    <AnchorOrButton class="card-interaction" {...interactionProps} />
  {/if}
</div>
