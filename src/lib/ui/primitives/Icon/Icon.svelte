<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';

  let {
    children,
    class: className,
    size = '16',
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    size?: '14' | '16' | '20' | '24' | '32' | '40' | '48';
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'icon', `icon-size-${size}`));
</script>

<svg
  class={classNames}
  width={size}
  height={size}
  viewBox="0 0 16 16"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...rest}
>
  {@render children?.()}
</svg>
