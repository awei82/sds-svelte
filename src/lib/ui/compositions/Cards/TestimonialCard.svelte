<script lang="ts">
  import Avatar from '../../primitives/Avatar/Avatar.svelte';
  import AvatarBlock from '../../primitives/Avatar/AvatarBlock.svelte';
  import TextHeading from '../../primitives/Text/TextHeading.svelte';
  import Card from './Card.svelte';

  let {
    heading,
    name,
    username,
    initials,
    src,
    ...rest
  }: {
    heading: string;
    name: string;
    username: string;
    initials?: string;
    src?: string;
    [key: string]: any;
  } = $props();
</script>

<Card {...rest} padding="600" direction="vertical" variant="stroke">
  <TextHeading>{heading}</TextHeading>
  <AvatarBlock title={name} description={`@${username}`}>
    <Avatar size="large" {src} {initials} />
  </AvatarBlock>
</Card>
