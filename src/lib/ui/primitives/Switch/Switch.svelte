<script lang="ts">
  import { clsx } from 'clsx';
  import './switch.css';

  let {
    class: className,
    ...rest
  }: {
    class?: string;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'switch'));
</script>

<div class={classNames} {...rest}>
  <span aria-hidden="true" class="switch-icon"></span>
</div>
