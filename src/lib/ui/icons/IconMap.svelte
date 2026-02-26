<script lang="ts">
  import Icon from '../primitives/Icon/Icon.svelte';
  let { ...rest }: { class?: string; size?: '14' | '16' | '20' | '24' | '32' | '40' | '48'; [key: string]: any } = $props();
</script>
<Icon {...rest}><g clip-path="url(#clip0_68_15855)"><path d="M5.33317 12L0.666504 14.6667V4.00004L5.33317 1.33337M5.33317 12L10.6665 14.6667M5.33317 12V1.33337M10.6665 14.6667L15.3332 12V1.33337L10.6665 4.00004M10.6665 14.6667V4.00004M10.6665 4.00004L5.33317 1.33337" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_68_15855"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
