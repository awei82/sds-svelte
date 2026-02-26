<script lang="ts">
  import ButtonGroup from '../../primitives/Button/ButtonGroup.svelte';
  import IconButton from '../../primitives/IconButton/IconButton.svelte';
  import IconTwitter from '../../icons/IconTwitter.svelte';
  import IconInstagram from '../../icons/IconInstagram.svelte';
  import IconYoutube from '../../icons/IconYoutube.svelte';
  import IconLinkedin from '../../icons/IconLinkedin.svelte';
</script>

<ButtonGroup>
  <IconButton
    variant="subtle"
    aria-label="Twitter"
    href="https://www.twitter.com"
  >
    <IconTwitter />
  </IconButton>
  <IconButton
    variant="subtle"
    aria-label="Instagram"
    href="https://www.instagram.com"
  >
    <IconInstagram />
  </IconButton>
  <IconButton
    variant="subtle"
    aria-label="YouTube"
    href="https://www.youtube.com"
  >
    <IconYoutube />
  </IconButton>
  <IconButton
    variant="subtle"
    aria-label="LinkedIn"
    href="https://www.linkedin.com"
  >
    <IconLinkedin />
  </IconButton>
</ButtonGroup>
