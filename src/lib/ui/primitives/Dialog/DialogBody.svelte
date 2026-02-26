<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './dialog.css';

  let {
    children,
    class: className,
    bleed = false,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    bleed?: boolean;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'dialog-body', bleed && 'dialog-body-bleed'));
</script>

<div class={classNames} {...rest}>
  {@render children?.()}
</div>
