<script lang="ts">
  import Icon from '../primitives/Icon/Icon.svelte';
  let { ...rest }: { class?: string; size?: '14' | '16' | '20' | '24' | '32' | '40' | '48'; [key: string]: any } = $props();
</script>
<Icon {...rest}><path d="M4.66675 11.3334L11.3334 4.66675M11.3334 4.66675H4.66675M11.3334 4.66675V11.3334" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></Icon>
