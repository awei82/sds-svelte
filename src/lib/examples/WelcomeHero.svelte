<script lang="ts">
  import { isMobile } from '$lib/ui/hooks/useMediaQuery';
  import Section from '$lib/ui/layout/Section/Section.svelte';
  import Flex from '$lib/ui/layout/Flex/Flex.svelte';
  import TextContentTitle from '$lib/ui/primitives/Text/TextContentTitle.svelte';
  import Form from '$lib/ui/primitives/Fieldset/Form.svelte';
  import Input from '$lib/ui/primitives/Input/Input.svelte';
  import Button from '$lib/ui/primitives/Button/Button.svelte';

  type SectionPadding = '600' | '800' | '1200' | '1600' | '4000';
  type FlexGap = '100' | '200' | '300' | '400' | '600' | '800' | '1200' | '1600';

  let sectionPadding: SectionPadding = $derived($isMobile ? '600' : '1600');
  let flexGap: FlexGap = $derived($isMobile ? '600' : '1200');
</script>

<Section padding={sectionPadding} variant="stroke">
  <Flex
    container
    wrap
    gap={flexGap}
    direction="column"
    alignPrimary="center"
    alignSecondary="center"
    type="third"
  >
    <TextContentTitle align="center">
      {#snippet title()}
        Welcome Home
      {/snippet}
      {#snippet subtitle()}
        We're happy to have&nbsp;you.
      {/snippet}
    </TextContentTitle>
    <Form singleLine>
      <Input aria-label="Email address" placeholder="you@example.com" />
      <Button variant="neutral">Get updates</Button>
    </Form>
  </Flex>
</Section>
