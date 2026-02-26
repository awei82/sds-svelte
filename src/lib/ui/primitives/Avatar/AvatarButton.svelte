<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import AnchorOrButton from '../../utils/AnchorOrButton.svelte';
  import './avatar.css';

  let {
    children,
    class: className,
    src = null,
    square = false,
    initials,
    alt = '',
    size = 'medium',
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    src?: string | null;
    square?: boolean;
    initials?: string;
    alt?: string;
    size?: 'small' | 'medium' | 'large';
    href?: string;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(
    className,
    'avatar',
    'avatar-button',
    `avatar-size-${size}`,
    `avatar-shape-${square ? 'square' : 'circle'}`,
    src ? 'avatar-image' : 'avatar-initials',
  ));
</script>

<AnchorOrButton class={classNames} {...rest}>
  {#if initials}
    <svg viewBox="0 0 100 100" aria-hidden={alt ? undefined : 'true'}>
      {#if alt}<title>{alt}</title>{/if}
      <text
        x="50%"
        y="50%"
        alignment-baseline="middle"
        dominant-baseline="middle"
        text-anchor="middle"
        dy=".125em"
      >
        {initials}
      </text>
    </svg>
  {/if}
  {#if src}
    <img {src} {alt} />
  {/if}
</AnchorOrButton>
