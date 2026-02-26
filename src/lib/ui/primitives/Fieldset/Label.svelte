<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './fieldset.css';

  let {
    children,
    class: className,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    for?: string;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'label'));
</script>

<label class={classNames} {...rest}>
  {@render children?.()}
</label>
