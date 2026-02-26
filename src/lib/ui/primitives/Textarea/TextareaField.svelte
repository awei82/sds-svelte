<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import Textarea from './Textarea.svelte';
  import './textarea.css';

  let {
    children,
    class: className,
    label,
    description,
    errorMessage,
    placeholder,
    value,
    name,
    id,
    isResizable = true,
    disabled,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    label?: string;
    description?: string;
    errorMessage?: string;
    placeholder?: string;
    value?: string;
    name?: string;
    id?: string;
    isResizable?: boolean;
    disabled?: boolean;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'field'));
</script>

<div class={classNames} {...rest}>
  {#if label}
    <label class="label" for={id}>{label}</label>
  {/if}
  <Textarea {placeholder} {value} {name} {id} {isResizable} {disabled} />
  {#if description}
    <p class="description">{description}</p>
  {/if}
  {#if errorMessage}
    <span class="error-message" role="alert">{errorMessage}</span>
  {/if}
</div>
