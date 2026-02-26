<script lang="ts">
  import { clsx } from 'clsx';
  import './input.css';

  let {
    class: className,
    type = 'text',
    ...rest
  }: {
    class?: string;
    type?: string;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    name?: string;
    id?: string;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'input'));
</script>

<input class={classNames} {type} {...rest} />
