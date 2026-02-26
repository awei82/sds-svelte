<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './text.css';

  let {
    children,
    class: className,
    density = 'default',
    title: listTitle,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    density?: 'default' | 'tight';
    title?: Snippet;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(
    className,
    'text-list',
    `text-list-density-${density}`,
  ));
</script>

<ul class={classNames} {...rest}>
  {#if listTitle}
    <li class="text-list-title">{@render listTitle()}</li>
  {/if}
  {@render children?.()}
</ul>
