<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './tag.css';

  let {
    children,
    class: className,
    selectionMode = 'single',
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    selectionMode?: 'single' | 'multiple';
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'tag-toggle-group'));
</script>

<div class={classNames} role="listbox" aria-multiselectable={selectionMode === 'multiple'} {...rest}>
  {@render children?.()}
</div>
