<script lang="ts">
  import { clsx } from 'clsx';
  import './menu.css';

  let {
    class: className,
    ...rest
  }: {
    class?: string;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'menu-separator'));
</script>

<hr class={classNames} role="separator" {...rest} />
