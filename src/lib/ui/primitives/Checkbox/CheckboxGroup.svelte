<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './checkbox.css';

  let {
    children,
    class: className,
    label,
    description,
    errorMessage,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    label?: string;
    description?: string;
    errorMessage?: string;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'checkbox-group'));
</script>

<div class={classNames} role="group" aria-label={label} {...rest}>
  {#if label}
    <label class="label">{label}</label>
  {/if}
  {#if description}
    <p class="description">{description}</p>
  {/if}
  {#if errorMessage}
    <span class="error-message" role="alert">{errorMessage}</span>
  {/if}
  {@render children?.()}
</div>
