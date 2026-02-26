<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './select.css';

  let {
    children,
    class: className,
    label,
    description,
    errorMessage,
    name,
    id,
    value,
    disabled,
    onchange,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    label?: string;
    description?: string;
    errorMessage?: string;
    name?: string;
    id?: string;
    value?: string;
    disabled?: boolean;
    onchange?: (e: Event) => void;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'select-container'));
</script>

<div class={classNames} {...rest}>
  <div class="field">
    {#if label}
      <label class="label" for={id}>{label}</label>
    {/if}
    <div class="select-wrapper">
      <select class="select" {name} {id} {value} {disabled} {onchange}>
        {@render children?.()}
      </select>
      <svg class="select-chevron" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 6L8 10L12 6" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    {#if description}
      <p class="description">{description}</p>
    {/if}
    {#if errorMessage}
      <span class="error-message" role="alert">{errorMessage}</span>
    {/if}
  </div>
</div>
