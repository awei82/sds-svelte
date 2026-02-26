<script lang="ts">
  import Icon from '../primitives/Icon/Icon.svelte';
  let { ...rest }: { class?: string; size?: '14' | '16' | '20' | '24' | '32' | '40' | '48'; [key: string]: any } = $props();
</script>
<Icon {...rest}><path d="M14.6666 3.99996C14.6666 3.26663 14.0666 2.66663 13.3333 2.66663H2.66659C1.93325 2.66663 1.33325 3.26663 1.33325 3.99996M14.6666 3.99996V12C14.6666 12.7333 14.0666 13.3333 13.3333 13.3333H2.66659C1.93325 13.3333 1.33325 12.7333 1.33325 12V3.99996M14.6666 3.99996L7.99992 8.66663L1.33325 3.99996" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></Icon>
