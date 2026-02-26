<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import './slider.css';

  let {
    children,
    class: className,
    name,
    label,
    description,
    showOutput = false,
    minValue = 0,
    maxValue = 100,
    step = 1,
    value = 50,
    onChange,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    name?: string;
    label?: string;
    description?: string;
    showOutput?: boolean;
    minValue?: number;
    maxValue?: number;
    step?: number;
    value?: number;
    onChange?: (value: number) => void;
    [key: string]: any;
  } = $props();

  let currentValue = $state(value);

  function handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    currentValue = Number(target.value);
    onChange?.(currentValue);
  }

  let classNames = $derived(clsx(className, 'slider-field'));
</script>

<div class={classNames} {...rest}>
  <div class="field">
    {#if label}
      <label class="label">{label}</label>
    {/if}
    {#if showOutput}
      <output class="slider-output">{currentValue}</output>
    {/if}
    <div class="slider">
      <input
        type="range"
        class="slider-thumb"
        min={minValue}
        max={maxValue}
        {step}
        value={currentValue}
        {name}
        oninput={handleInput}
      />
    </div>
    {#if description}
      <p class="description">{description}</p>
    {/if}
  </div>
</div>
