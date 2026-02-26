<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import Flex from '../../layout/Flex/Flex.svelte';
  import TextHeading from './TextHeading.svelte';
  import TextSubheading from './TextSubheading.svelte';
  import './text.css';

  let {
    class: className,
    align = 'start',
    heading,
    subheading,
    ...rest
  }: {
    class?: string;
    align?: 'start' | 'center';
    heading: string;
    subheading?: string;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(
    className,
    'text-content-heading',
    `text-align-${align}`,
  ));
</script>

<Flex direction="column" gap="200" class={classNames} {...rest}>
  <TextHeading>{heading}</TextHeading>
  {#if subheading}
    <TextSubheading>{subheading}</TextSubheading>
  {/if}
</Flex>
