<script lang="ts">
  import Icon from '../primitives/Icon/Icon.svelte';
  let { ...rest }: { class?: string; size?: '14' | '16' | '20' | '24' | '32' | '40' | '48'; [key: string]: any } = $props();
</script>
<Icon {...rest}><path d="M6 12L10 8L6 4" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></Icon>
