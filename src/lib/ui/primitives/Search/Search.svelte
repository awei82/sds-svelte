<script lang="ts">
  import { clsx } from 'clsx';
  import './search.css';

  let {
    class: className,
    value = '',
    placeholder,
    onSearch,
    results,
    ...rest
  }: {
    class?: string;
    value?: string;
    placeholder?: string;
    onSearch?: (search: string) => void;
    results?: string[];
    'aria-label'?: string;
    [key: string]: any;
  } = $props();

  let searchTerm = $state(value);
  let inputEl: HTMLInputElement | undefined = $state();

  function handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    searchTerm = target.value;
    onSearch?.(searchTerm);
  }

  function clearSearch() {
    searchTerm = '';
    onSearch?.('');
    inputEl?.focus();
  }

  let classNames = $derived(clsx(className, 'search-input-container'));
</script>

<div class={classNames}>
  <label class="label" hidden>{rest['aria-label'] || 'Search'}</label>
  <input
    type="search"
    class="input search-input"
    value={searchTerm}
    {placeholder}
    oninput={handleInput}
    bind:this={inputEl}
    {...rest}
  />
  <span class="search-icon">
    {#if searchTerm}
      <button
        class="icon-button button button-size-small button-variant-subtle"
        aria-label="Clear search"
        onclick={clearSearch}
        type="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 12L12 4M12 12L4 4" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    {:else}
      <button
        class="icon-button button button-size-small button-variant-subtle"
        aria-label="Search"
        onclick={() => inputEl?.focus()}
        type="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14 14L11.1 11.1" stroke="var(--svg-stroke-color)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    {/if}
  </span>
</div>
