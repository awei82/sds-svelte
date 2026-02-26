<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import Form from '../../primitives/Fieldset/Form.svelte';
  import './forms.css';

  let {
    children,
    class: className,
    ...rest
  }: {
    children?: Snippet;
    class?: string;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'form-box'));
</script>

<Form class={classNames} {...rest}>
  {@render children?.()}
</Form>
