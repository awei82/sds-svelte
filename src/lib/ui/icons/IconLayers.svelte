<script lang="ts">
  import Icon from '../primitives/Icon/Icon.svelte';
  let { ...rest }: { class?: string; size?: '14' | '16' | '20' | '24' | '32' | '40' | '48'; [key: string]: any } = $props();
</script>
<Icon {...rest}><g clip-path="url(#clip0_68_15829)"><path d="M1.33325 11.3333L7.99992 14.6666L14.6666 11.3333M1.33325 7.99998L7.99992 11.3333L14.6666 7.99998M7.99992 1.33331L1.33325 4.66665L7.99992 7.99998L14.6666 4.66665L7.99992 1.33331Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_68_15829"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
