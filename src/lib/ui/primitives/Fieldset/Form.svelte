<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './fieldset.css';

  let {
    children,
    class: className,
    singleLine = false,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    singleLine?: boolean;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'form', singleLine && 'form-single-line'));
</script>

<form class={classNames} {...rest}>
  {@render children?.()}
</form>
