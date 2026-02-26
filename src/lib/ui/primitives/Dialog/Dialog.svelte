<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './dialog.css';

  let {
    children,
    class: className,
    type = 'card',
    role = 'dialog',
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    type?: 'sheet' | 'card';
    role?: string;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'dialog', `dialog-type-${type}`));
</script>

<div class={classNames} {role} {...rest}>
  {@render children?.()}
</div>
