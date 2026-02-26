<script lang="ts">
  import Icon from '../primitives/Icon/Icon.svelte';
  let { ...rest }: { class?: string; size?: '14' | '16' | '20' | '24' | '32' | '40' | '48'; [key: string]: any } = $props();
</script>
<Icon {...rest}><path d="M10.6666 2H14M14 2V5.33333M14 2L2.66663 13.3333M14 10.6667V14M14 14H10.6666M14 14L9.99996 10M2.66663 2.66667L5.99996 6" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></Icon>
