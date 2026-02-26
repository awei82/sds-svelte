<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './pagination.css';
  import '../Button/button.css';

  let {
    children,
    class: className,
    'aria-label': ariaLabel = 'Page navigation',
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    'aria-label'?: string;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx('pagination'));
</script>

<nav aria-label={ariaLabel} class={classNames} {...rest}>
  {@render children?.()}
</nav>
