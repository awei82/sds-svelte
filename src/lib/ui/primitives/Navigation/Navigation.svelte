<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './navigation.css';

  let {
    children,
    class: className,
    direction = 'row',
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    direction?: 'column' | 'row';
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(
    className,
    'navigation',
    `navigation-direction-${direction}`,
  ));
</script>

<nav class={classNames} {...rest}>
  {@render children?.()}
</nav>
