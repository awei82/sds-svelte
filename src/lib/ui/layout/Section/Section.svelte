<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './section.css';

  let {
    children,
    class: className,
    elementType = 'section',
    padding = '600',
    paddingBottom,
    paddingTop,
    variant = 'subtle',
    src,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    elementType?: 'section' | 'header' | 'footer';
    padding?: '600' | '800' | '1200' | '1600' | '4000';
    paddingBottom?: '600' | '800' | '1200' | '1600' | '4000';
    paddingTop?: '600' | '800' | '1200' | '1600' | '4000';
    variant?: 'brand' | 'neutral' | 'stroke' | 'subtle' | 'image';
    src?: string;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(
    className,
    'section',
    `section-variant-${variant}`,
    `section-padding-top-${paddingTop || padding}`,
    `section-padding-bottom-${paddingBottom || padding}`,
  ));
</script>

<svelte:element this={elementType} class={classNames} {...rest}>
  {#if variant === 'image' && src}
    <img
      alt="Background image"
      role="presentation"
      {src}
      class="section-image"
    />
  {/if}
  {@render children?.()}
</svelte:element>
