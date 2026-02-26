<script lang="ts">
  import { clsx } from 'clsx';
  import './textarea.css';

  let {
    class: className,
    isResizable = true,
    ...rest
  }: {
    class?: string;
    isResizable?: boolean;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    name?: string;
    id?: string;
    rows?: number;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'text-area', isResizable && 'text-area-resizable'));
</script>

<textarea class={classNames} {...rest}></textarea>
