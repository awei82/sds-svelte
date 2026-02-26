<script lang="ts">
  import { isTabletDown } from '../../hooks/useMediaQuery';
  import Flex from '../../layout/Flex/Flex.svelte';
  import FlexItem from '../../layout/Flex/FlexItem.svelte';
  import Section from '../../layout/Section/Section.svelte';
  import Logo from '../../primitives/Logo/Logo.svelte';
  import TextLink from '../../primitives/Text/TextLink.svelte';
  import TextLinkList from '../../primitives/Text/TextLinkList.svelte';
  import TextListItem from '../../primitives/Text/TextListItem.svelte';
  import TextStrong from '../../primitives/Text/TextStrong.svelte';

  let {
    class: className,
    ...rest
  }: {
    class?: string;
    [key: string]: any;
  } = $props();

  let listDensity: 'default' | 'tight' = $derived($isTabletDown ? 'tight' : 'default');
</script>

<Section
  elementType="footer"
  variant="brand"
  paddingTop="1600"
  paddingBottom="4000"
  style="margin-top: auto"
  {...rest}
>
  <Flex wrap type="quarter" gap="600" container>
    <FlexItem size="minor">
      <Flex direction="column" gap="600" alignSecondary="start">
        <FlexItem>
          <Logo class="footer-logo" />
        </FlexItem>
        <TextLinkList density={listDensity}>
          <TextListItem>
            <TextLink href="https://www.figma.com">figma.com</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="https://www.x.com/figma">X</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="https://instagram.com/figma">Instagram</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="https://www.youtube.com/@Figma">YouTube</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="https://www.linkedin.com/company/figma/">LinkedIn</TextLink>
          </TextListItem>
        </TextLinkList>
      </Flex>
    </FlexItem>
    <TextLinkList density={listDensity}>
      {#snippet title()}<TextStrong>Use cases</TextStrong>{/snippet}
      <TextListItem>
        <TextLink href="#">UI design</TextLink>
      </TextListItem>
      <TextListItem>
        <TextLink href="#">UX design</TextLink>
      </TextListItem>
      <TextListItem>
        <TextLink href="#">Wireframing</TextLink>
      </TextListItem>
      <TextListItem>
        <TextLink href="#">Diagramming</TextLink>
      </TextListItem>
      <TextListItem>
        <TextLink href="#">Brainstorming</TextLink>
      </TextListItem>
      <TextListItem>
        <TextLink href="#">Online whiteboard</TextLink>
      </TextListItem>
      <TextListItem>
        <TextLink href="#">Team collaboration</TextLink>
      </TextListItem>
    </TextLinkList>
    <TextLinkList density={listDensity}>
      {#snippet title()}<TextStrong>Explore</TextStrong>{/snippet}
      <TextListItem>
        <TextLink href="#">Design</TextLink>
      </TextListItem>
      <TextListItem>
        <TextLink href="#">Prototyping</TextLink>
      </TextListItem>
      <TextListItem>
        <TextLink href="#">Development features</TextLink>
      </TextListItem>
      <TextListItem>
        <TextLink href="#">Design systems</TextLink>
      </TextListItem>
      <TextListItem>
        <TextLink href="#">Collaboration features</TextLink>
      </TextListItem>
      <TextListItem>
        <TextLink href="#">Design process</TextLink>
      </TextListItem>
      <TextListItem>
        <TextLink href="#">FigJam</TextLink>
      </TextListItem>
    </TextLinkList>
    <TextLinkList density={listDensity}>
      {#snippet title()}<TextStrong>Resources</TextStrong>{/snippet}
      <TextListItem>
        <TextLink href="#">Blog</TextLink>
      </TextListItem>
      <TextListItem>
        <TextLink href="#">Best practices</TextLink>
      </TextListItem>
      <TextListItem>
        <TextLink href="#">Colors</TextLink>
      </TextListItem>
      <TextListItem>
        <TextLink href="#">Color wheel</TextLink>
      </TextListItem>
      <TextListItem>
        <TextLink href="#">Support</TextLink>
      </TextListItem>
      <TextListItem>
        <TextLink href="#">Developers</TextLink>
      </TextListItem>
      <TextListItem>
        <TextLink href="#">Resource library</TextLink>
      </TextListItem>
    </TextLinkList>
  </Flex>
</Section>
