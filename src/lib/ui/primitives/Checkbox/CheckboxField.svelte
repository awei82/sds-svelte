<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import Checkbox from './Checkbox.svelte';
  import './checkbox.css';

  let {
    children,
    class: className,
    label,
    description,
    errorMessage,
    isSelected = false,
    isIndeterminate = false,
    isDisabled = false,
    onChange,
    value,
    name,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    label?: string;
    description?: string;
    errorMessage?: string;
    isSelected?: boolean;
    isIndeterminate?: boolean;
    isDisabled?: boolean;
    onChange?: (checked: boolean) => void;
    value?: string;
    name?: string;
    [key: string]: any;
  } = $props();

  function handleChange(e: Event) {
    const target = e.target as HTMLInputElement;
    onChange?.(target.checked);
  }

  let classNames = $derived(clsx(className, 'checkbox-field'));
</script>

<label class={classNames} {...rest}>
  <input
    type="checkbox"
    checked={isSelected}
    indeterminate={isIndeterminate}
    disabled={isDisabled}
    onchange={handleChange}
    {value}
    {name}
    class="checkbox-input"
  />
  <span class="label">{label}</span>
  <Checkbox />
  {#if description}
    <p class="description">{description}</p>
  {/if}
  {#if errorMessage}
    <span class="error-message" role="alert">{errorMessage}</span>
  {/if}
  {@render children?.()}
</label>
