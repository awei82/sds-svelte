<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './button.css';

  let {
    children,
    class: className,
    align = 'start',
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    align?: 'start' | 'end' | 'center' | 'justify' | 'stack';
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(
    className,
    'button-group',
    `button-group-align-${align}`,
  ));
</script>

<div class={classNames} {...rest}>
  {@render children?.()}
</div>
