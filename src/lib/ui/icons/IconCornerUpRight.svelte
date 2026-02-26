<script lang="ts">
  import Icon from '../primitives/Icon/Icon.svelte';
  let { ...rest }: { class?: string; size?: '14' | '16' | '20' | '24' | '32' | '40' | '48'; [key: string]: any } = $props();
</script>
<Icon {...rest}><path d="M9.99984 9.33335L13.3332 6.00002M13.3332 6.00002L9.99984 2.66669M13.3332 6.00002H5.33317C4.62593 6.00002 3.94765 6.28097 3.44755 6.78107C2.94746 7.28117 2.6665 7.95944 2.6665 8.66669V13.3334" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></Icon>
