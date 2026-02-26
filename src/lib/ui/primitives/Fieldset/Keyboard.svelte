<script lang="ts">
  import { clsx } from 'clsx';
  import './fieldset.css';

  let {
    children,
    class: className,
    ...rest
  }: {
    children?: string;
    class?: string;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'keyboard'));
</script>

<kbd class={classNames} {...rest}>
  {#if children}
    {#each children.split('') as key}
      <kbd>{key}</kbd>
    {/each}
  {/if}
</kbd>
