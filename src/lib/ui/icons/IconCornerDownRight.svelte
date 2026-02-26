<script lang="ts">
  import Icon from '../primitives/Icon/Icon.svelte';
  let { ...rest }: { class?: string; size?: '14' | '16' | '20' | '24' | '32' | '40' | '48'; [key: string]: any } = $props();
</script>
<Icon {...rest}><path d="M10 6.66669L13.3334 10M13.3334 10L10 13.3334M13.3334 10H5.33335C4.62611 10 3.94783 9.71907 3.44774 9.21897C2.94764 8.71887 2.66669 8.0406 2.66669 7.33335V2.66669" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></Icon>
