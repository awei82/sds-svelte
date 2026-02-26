<script lang="ts">
  import Icon from '../primitives/Icon/Icon.svelte';
  let { ...rest }: { class?: string; size?: '14' | '16' | '20' | '24' | '32' | '40' | '48'; [key: string]: any } = $props();
</script>
<Icon {...rest}><path d="M12.6666 3.33341V12.6667M3.33325 2.66675L9.99992 8.00008L3.33325 13.3334V2.66675Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></Icon>
