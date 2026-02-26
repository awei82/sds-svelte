<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './switch.css';

  let {
    children,
    class: className,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'switch-group'));
</script>

<div class={classNames} {...rest}>
  {@render children?.()}
</div>
