<script lang="ts">
  import { clsx } from 'clsx';
  import './checkbox.css';

  let {
    class: className,
    ...rest
  }: {
    class?: string;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'checkbox'));
</script>

<div class={classNames} {...rest}>
  <svg aria-hidden="true" class="icon-indeterminate" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3.33325 8H12.6666" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  <svg aria-hidden="true" class="icon-selected" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</div>
