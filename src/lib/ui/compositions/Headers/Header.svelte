<script lang="ts">
  import Flex from '../../layout/Flex/Flex.svelte';
  import FlexItem from '../../layout/Flex/FlexItem.svelte';
  import Section from '../../layout/Section/Section.svelte';
  import Logo from '../../primitives/Logo/Logo.svelte';
  import HeaderAuth from './HeaderAuth.svelte';
  import './headers.css';

  let {
    class: className,
    ...rest
  }: {
    class?: string;
    [key: string]: any;
  } = $props();
</script>

<Section
  class="header"
  elementType="header"
  variant="stroke"
  padding="800"
  {...rest}
>
  <Flex container alignPrimary="space-between" alignSecondary="center">
    <FlexItem size="minor">
      <Logo />
    </FlexItem>
    <FlexItem size="major">
      <Flex gap="600" alignPrimary="end" alignSecondary="center">
        <HeaderAuth />
      </Flex>
    </FlexItem>
  </Flex>
</Section>
