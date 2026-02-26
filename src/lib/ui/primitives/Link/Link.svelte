<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './link.css';

  let {
    children,
    class: className,
    href,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    href: string;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx('link', className));
</script>

<a {href} class={classNames} {...rest}>
  {@render children?.()}
</a>
