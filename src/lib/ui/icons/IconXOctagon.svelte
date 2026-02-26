<script lang="ts">
  import Icon from '../primitives/Icon/Icon.svelte';
  let { ...rest }: { class?: string; size?: '14' | '16' | '20' | '24' | '32' | '40' | '48'; [key: string]: any } = $props();
</script>
<Icon {...rest}><g clip-path="url(#clip0_68_16109)"><path d="M10 6.00016L6.00001 10.0002M6.00001 6.00016L10 10.0002M5.24001 1.3335H10.76L14.6667 5.24016V10.7602L10.76 14.6668H5.24001L1.33334 10.7602V5.24016L5.24001 1.3335Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_68_16109"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
