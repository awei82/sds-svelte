<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import Radio from './Radio.svelte';
  import './radio.css';

  let {
    children,
    class: className,
    label,
    description,
    errorMessage,
    isSelected = false,
    isDisabled = false,
    value,
    name,
    onChange,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    label?: string;
    description?: string;
    errorMessage?: string;
    isSelected?: boolean;
    isDisabled?: boolean;
    value?: string;
    name?: string;
    onChange?: (value: string) => void;
    [key: string]: any;
  } = $props();

  function handleChange(e: Event) {
    const target = e.target as HTMLInputElement;
    onChange?.(target.value);
  }

  let classNames = $derived(clsx(className, 'radio-field'));
</script>

<label class={classNames} {...rest}>
  <input
    type="radio"
    checked={isSelected}
    disabled={isDisabled}
    {value}
    {name}
    onchange={handleChange}
    class="radio-input"
  />
  <span class="label">{label}</span>
  <Radio />
  {#if description}
    <p class="description">{description}</p>
  {/if}
  {#if errorMessage}
    <span class="error-message" role="alert">{errorMessage}</span>
  {/if}
  {@render children?.()}
</label>
