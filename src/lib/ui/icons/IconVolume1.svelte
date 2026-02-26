<script lang="ts">
  import Icon from '../primitives/Icon/Icon.svelte';
  let { ...rest }: { class?: string; size?: '14' | '16' | '20' | '24' | '32' | '40' | '48'; [key: string]: any } = $props();
</script>
<Icon {...rest}><path d="M10.36 5.64016C10.9849 6.26526 11.336 7.11295 11.336 7.99683C11.336 8.88071 10.9849 9.7284 10.36 10.3535M7.33334 3.3335L4.00001 6.00016H1.33334V10.0002H4.00001L7.33334 12.6668V3.3335Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></Icon>
