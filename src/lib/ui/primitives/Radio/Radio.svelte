<script lang="ts">
  import { clsx } from 'clsx';
  import './radio.css';

  let {
    class: className,
    ...rest
  }: {
    class?: string;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'radio'));
</script>

<div class={classNames} {...rest}>
  <span aria-hidden="true" class="radio-check"></span>
</div>
