<script lang="ts">
  import Icon from '../primitives/Icon/Icon.svelte';
  let { ...rest }: { class?: string; size?: '14' | '16' | '20' | '24' | '32' | '40' | '48'; [key: string]: any } = $props();
</script>
<Icon {...rest}><g clip-path="url(#clip0_68_15843)"><path d="M8.00004 1.33337V4.00004M8.00004 12V14.6667M3.28671 3.28671L5.17337 5.17337M10.8267 10.8267L12.7134 12.7134M1.33337 8.00004H4.00004M12 8.00004H14.6667M3.28671 12.7134L5.17337 10.8267M10.8267 5.17337L12.7134 3.28671" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_68_15843"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
