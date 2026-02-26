<script lang="ts">
  import Icon from '../primitives/Icon/Icon.svelte';
  let { ...rest }: { class?: string; size?: '14' | '16' | '20' | '24' | '32' | '40' | '48'; [key: string]: any } = $props();
</script>
<Icon {...rest}><path d="M7.99984 14.6666C7.99984 14.6666 13.3332 11.9999 13.3332 7.99992V3.33325L7.99984 1.33325L2.6665 3.33325V7.99992C2.6665 11.9999 7.99984 14.6666 7.99984 14.6666Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></Icon>
