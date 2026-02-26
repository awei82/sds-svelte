<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './select.css';

  let {
    children,
    class: className,
    value,
    disabled = false,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    value?: string;
    disabled?: boolean;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'select-item'));
</script>

<option class={classNames} {value} {disabled} {...rest}>
  {@render children?.()}
</option>
