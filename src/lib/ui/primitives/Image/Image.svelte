<script lang="ts">
  import { clsx } from 'clsx';
  import './image.css';

  let {
    alt,
    class: className,
    src,
    aspectRatio = 'natural',
    size = 'natural',
    variant = 'rounded',
    ...rest
  }: {
    alt: string;
    class?: string;
    src?: string;
    aspectRatio?: '1-1' | '16-9' | '4-3' | 'fill' | 'natural';
    size?: 'small' | 'medium' | 'large' | 'fill' | 'natural';
    variant?: 'default' | 'rounded';
    [key: string]: any;
  } = $props();

  let loaded = $state(false);

  let classNames = $derived(clsx(
    className,
    'image',
    `image-aspect-ratio-${aspectRatio}`,
    `image-size-${size}`,
    `image-variant-${variant}`,
    !loaded && 'image-loading',
  ));
</script>

{#if !loaded}
  <span class={clsx('image-placeholder', classNames)}></span>
{/if}
{#if src}
  <img class={classNames} {src} {alt} onload={() => { loaded = true; }} {...rest} />
{/if}
