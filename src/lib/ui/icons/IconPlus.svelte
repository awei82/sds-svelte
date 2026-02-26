<script lang="ts">
  import Icon from '../primitives/Icon/Icon.svelte';
  let { ...rest }: { class?: string; size?: '14' | '16' | '20' | '24' | '32' | '40' | '48'; [key: string]: any } = $props();
</script>
<Icon {...rest}><path d="M7.99992 3.33325V12.6666M3.33325 7.99992H12.6666" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></Icon>
