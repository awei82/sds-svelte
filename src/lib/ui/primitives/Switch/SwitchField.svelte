<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import Switch from './Switch.svelte';
  import './switch.css';

  let {
    children,
    class: className,
    label,
    description,
    errorMessage,
    isSelected = false,
    isDisabled = false,
    onChange,
    name,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    label?: string;
    description?: string;
    errorMessage?: string;
    isSelected?: boolean;
    isDisabled?: boolean;
    onChange?: (checked: boolean) => void;
    name?: string;
    [key: string]: any;
  } = $props();

  function handleChange(e: Event) {
    const target = e.target as HTMLInputElement;
    onChange?.(target.checked);
  }

  let classNames = $derived(clsx(className, 'switch-field'));
</script>

<label class={classNames} {...rest}>
  <input
    type="checkbox"
    role="switch"
    checked={isSelected}
    disabled={isDisabled}
    onchange={handleChange}
    {name}
    class="switch-input"
  />
  <span class="label">{label}</span>
  <Switch />
  {#if description}
    <p class="description">{description}</p>
  {/if}
  {#if errorMessage}
    <span class="error-message" role="alert">{errorMessage}</span>
  {/if}
  {@render children?.()}
</label>
