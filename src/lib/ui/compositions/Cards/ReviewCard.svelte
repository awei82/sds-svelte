<script lang="ts">
  import Flex from '../../layout/Flex/Flex.svelte';
  import Avatar from '../../primitives/Avatar/Avatar.svelte';
  import AvatarBlock from '../../primitives/Avatar/AvatarBlock.svelte';
  import TextHeading from '../../primitives/Text/TextHeading.svelte';
  import TextSmall from '../../primitives/Text/TextSmall.svelte';
  import IconStar from '../../icons/IconStar.svelte';
  import Card from './Card.svelte';

  let {
    stars,
    title,
    body,
    name,
    date,
    src,
    ...rest
  }: {
    stars: number;
    title: string;
    body: string;
    name: string;
    date: string;
    src?: string;
    [key: string]: any;
  } = $props();
</script>

<Card {...rest} padding="600" direction="vertical" variant="stroke">
  <Flex gap="100">
    {#each Array(stars) as _}
      <IconStar />
    {/each}
  </Flex>
  <Flex direction="column" gap="100">
    <TextHeading>{title}</TextHeading>
    <TextSmall>{body}</TextSmall>
  </Flex>
  <AvatarBlock title={name} description={date}>
    <Avatar size="large" {src} initials={name.charAt(0)} />
  </AvatarBlock>
</Card>
