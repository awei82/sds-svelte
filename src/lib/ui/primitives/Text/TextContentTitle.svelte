<script lang="ts">
  import { clsx } from 'clsx';
  import type { Snippet } from 'svelte';
  import Flex from '../../layout/Flex/Flex.svelte';
  import TextTitleHero from './TextTitleHero.svelte';
  import TextTitlePage from './TextTitlePage.svelte';
  import TextSubtitle from './TextSubtitle.svelte';
  import './text.css';

  let {
    class: className,
    align = 'start',
    title: titleContent,
    subtitle,
    isMobile = false,
    ...rest
  }: {
    class?: string;
    align?: 'start' | 'center';
    title?: Snippet;
    subtitle?: Snippet;
    isMobile?: boolean;
    [key: string]: any;
  } = $props();

  let classNames = $derived(clsx(className, 'text-content-title'));
</script>

<Flex direction="column" gap="200" class={classNames} {...rest}>
  {#if isMobile}
    <TextTitlePage class={`text-align-${align}`}>
      {#if titleContent}
        {@render titleContent()}
      {/if}
    </TextTitlePage>
  {:else}
    <TextTitleHero class={`text-align-${align}`}>
      {#if titleContent}
        {@render titleContent()}
      {/if}
    </TextTitleHero>
  {/if}

  {#if subtitle}
    <TextSubtitle class={`text-align-${align}`}>
      {@render subtitle()}
    </TextSubtitle>
  {/if}
</Flex>
