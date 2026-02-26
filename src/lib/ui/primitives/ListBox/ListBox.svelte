<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './listBox.css';

  let {
    children,
    class: className,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'list-box'));
</script>

<div class={classNames} role="listbox" {...rest}>
  {@render children?.()}
</div>
