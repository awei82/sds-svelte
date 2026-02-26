<script lang="ts">
  import './dialog.css';

  let {
    onclick,
    ...rest
  }: {
    onclick?: () => void;
    [key: string]: any;
  } = $props();
</script>

<button
  class="dialog-close icon-button button button-size-small button-variant-subtle"
  aria-label="Dismiss dialog"
  onclick={onclick}
  type="button"
  {...rest}
>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M4 12L12 4M12 12L4 4" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</button>
