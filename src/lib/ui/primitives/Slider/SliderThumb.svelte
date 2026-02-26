<script lang="ts">
  import { clsx } from 'clsx';
  import './slider.css';

  let {
    class: className,
    name,
    index,
    min = 0,
    max = 100,
    step = 1,
    value = 50,
    oninput,
    ...rest
  }: {
    class?: string;
    name?: string;
    index?: number;
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    oninput?: (e: Event) => void;
    'aria-label'?: string;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'slider-thumb'));
</script>

<input
  type="range"
  class={classNames}
  {name}
  {min}
  {max}
  {step}
  {value}
  {oninput}
  {...rest}
/>
