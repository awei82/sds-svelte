<script lang="ts">
  import Icon from '../primitives/Icon/Icon.svelte';
  let { ...rest }: { class?: string; size?: '14' | '16' | '20' | '24' | '32' | '40' | '48'; [key: string]: any } = $props();
</script>
<Icon {...rest}><path d="M2.66663 10C2.66663 10 3.33329 9.33333 5.33329 9.33333C7.33329 9.33333 8.66663 10.6667 10.6666 10.6667C12.6666 10.6667 13.3333 10 13.3333 10V2C13.3333 2 12.6666 2.66667 10.6666 2.66667C8.66663 2.66667 7.33329 1.33333 5.33329 1.33333C3.33329 1.33333 2.66663 2 2.66663 2V10ZM2.66663 10V14.6667" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></Icon>
