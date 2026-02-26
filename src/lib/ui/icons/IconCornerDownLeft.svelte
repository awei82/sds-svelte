<script lang="ts">
  import Icon from '../primitives/Icon/Icon.svelte';
  let { ...rest }: { class?: string; size?: '14' | '16' | '20' | '24' | '32' | '40' | '48'; [key: string]: any } = $props();
</script>
<Icon {...rest}><path d="M5.99999 6.66669L2.66666 10M2.66666 10L5.99999 13.3334M2.66666 10H10.6667C11.3739 10 12.0522 9.71907 12.5523 9.21897C13.0524 8.71887 13.3333 8.0406 13.3333 7.33335V2.66669" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></Icon>
