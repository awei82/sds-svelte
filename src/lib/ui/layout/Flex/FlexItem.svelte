<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';

  let {
    children,
    class: className,
    size,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    size?: 'full' | 'major' | 'minor' | 'half' | 'fill';
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(
    className,
    'flex-item',
    size && `flex-item-size-${size}`,
  ));
</script>

<div class={classNames} {...rest}>
  {@render children?.()}
</div>
