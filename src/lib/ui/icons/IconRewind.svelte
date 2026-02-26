<script lang="ts">
  import Icon from '../primitives/Icon/Icon.svelte';
  let { ...rest }: { class?: string; size?: '14' | '16' | '20' | '24' | '32' | '40' | '48'; [key: string]: any } = $props();
</script>
<Icon {...rest}><path d="M7.33325 12.6666L1.33325 7.99992L7.33325 3.33325V12.6666Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.6666 12.6666L8.66658 7.99992L14.6666 3.33325V12.6666Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></Icon>
