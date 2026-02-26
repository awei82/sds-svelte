<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './avatar.css';

  let {
    children,
    class: className,
    title: avatarTitle,
    description,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    title: string;
    description?: string;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'avatar-block'));
</script>

<div class={classNames} {...rest}>
  {@render children?.()}
  <strong class="text-body-strong">{avatarTitle}</strong>
  {#if description}
    <p class="text-body-base">{description}</p>
  {/if}
</div>
