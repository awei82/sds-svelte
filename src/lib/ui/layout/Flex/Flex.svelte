<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './flex.css';

  let {
    children,
    class: className,
    alignPrimary = 'start',
    alignSecondary = 'start',
    container = false,
    direction = 'row',
    gap,
    type = 'auto',
    wrap = false,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    alignPrimary?: 'start' | 'end' | 'center' | 'stretch' | 'space-between';
    alignSecondary?: 'start' | 'end' | 'center' | 'stretch' | 'space-between';
    container?: boolean;
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    gap?: '100' | '200' | '300' | '400' | '600' | '800' | '1200' | '1600';
    type?: 'quarter' | 'third' | 'half' | 'auto';
    wrap?: boolean;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(
    className,
    'flex',
    container && 'flex-container',
    `flex-align-primary-${alignPrimary}`,
    `flex-align-secondary-${alignSecondary}`,
    `flex-direction-${direction}`,
    `flex-type-${type}`,
    gap && `flex-gap-${gap}`,
    wrap && 'flex-wrap',
  ));
</script>

<div
  style="--flex-align-primary: {alignPrimary}; --flex-align-secondary: {alignSecondary}; --flex-direction: {direction};"
  class={classNames}
  {...rest}
>
  {@render children?.()}
</div>
