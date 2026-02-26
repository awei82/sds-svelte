<script lang="ts">
  import { isMobile } from '$lib/ui/hooks/useMediaQuery';
  import Section from '$lib/ui/layout/Section/Section.svelte';
  import Flex from '$lib/ui/layout/Flex/Flex.svelte';
  import FlexItem from '$lib/ui/layout/Flex/FlexItem.svelte';
  import Accordion from '$lib/ui/primitives/Accordion/Accordion.svelte';
  import AccordionItem from '$lib/ui/primitives/Accordion/AccordionItem.svelte';
  import TextContentHeading from '$lib/ui/primitives/Text/TextContentHeading.svelte';

  type SectionPadding = '600' | '800' | '1200' | '1600' | '4000';
  type FlexGap = '100' | '200' | '300' | '400' | '600' | '800' | '1200' | '1600';

  let flexGap: FlexGap = $derived($isMobile ? '600' : '1200');
  let sectionPadding: SectionPadding = $derived($isMobile ? '600' : '1600');
</script>

<Section padding={sectionPadding} variant="neutral">
  <Flex container direction="column" alignSecondary="stretch" gap={flexGap}>
    <TextContentHeading
      align="center"
      heading="Frequently Asked Questions"
      subheading="Find answers to common questions about Simple Design System"
    />
    <Flex container type="third" alignPrimary="center">
      <FlexItem size="major">
        <Accordion>
          <AccordionItem title="What is Simple Design System (SDS)?">
            SDS is a React-based design system that provides accessible,
            production-ready UI components, design tokens, and Figma
            integration for demonstrating how to build consistent user
            interfaces efficiently.
          </AccordionItem>
          <AccordionItem title="How do I install SDS in my project?">
            It is not distributed yet, but you can use it directly, by
            cloning the repository at
            <a href="https://github.com/figma/sds">github.com/figma/sds</a>.
            Refer to the documentation for setup instructions and usage
            examples.
          </AccordionItem>
          <AccordionItem title="Does SDS support dark mode?">
            Yes, SDS includes full support for light and dark modes using
            CSS custom properties. It automatically adapts to the user's
            system preferences.
          </AccordionItem>
          <AccordionItem title="Can I customize the design tokens?">
            Absolutely! All design tokens are defined as CSS variables in
            <code>theme.css</code>. You can override them in your
            application to match your brand.
          </AccordionItem>
          <AccordionItem title="Where can I find component documentation?">
            Comprehensive documentation and usage examples are available in
            the Storybook at
            <a href="https://figma.github.io/sds/storybook">
              figma.github.io/sds/storybook
            </a>.
          </AccordionItem>
        </Accordion>
      </FlexItem>
    </Flex>
  </Flex>
</Section>
