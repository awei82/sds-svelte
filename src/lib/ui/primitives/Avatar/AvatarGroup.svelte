<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './avatar.css';

  let {
    children,
    class: className,
    max = 3,
    spacing = '200',
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    max?: number;
    spacing?: '100' | '200' | '300' | 'negative-100' | 'negative-200' | 'negative-300';
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(
    className,
    'avatar-group',
    `avatar-group-spacing-${spacing}`,
  ));
</script>

<div class={classNames} {...rest}>
  {@render children?.()}
</div>
