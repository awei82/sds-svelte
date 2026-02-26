<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './tab.css';

  let {
    children,
    class: className,
    id,
    labelledBy,
    hidden = false,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    id?: string;
    labelledBy?: string;
    hidden?: boolean;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'tab-panel'));
</script>

<div
  class={classNames}
  role="tabpanel"
  {id}
  aria-labelledby={labelledBy}
  {hidden}
  tabindex={0}
  {...rest}
>
  {@render children?.()}
</div>
