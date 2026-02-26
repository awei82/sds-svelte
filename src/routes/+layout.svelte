<script lang="ts">
  import '../index.css';
  import type { Snippet } from 'svelte';
  import Header from '$lib/ui/compositions/Headers/Header.svelte';
  import Footer from '$lib/ui/compositions/Footers/Footer.svelte';
  import { authStore } from '$lib/data/stores/auth';
  import { pricingStore } from '$lib/data/stores/pricing';
  import { productsStore } from '$lib/data/stores/products';
  import { onMount } from 'svelte';

  let { children }: { children: Snippet } = $props();

  onMount(() => {
    authStore.initAuth();
    pricingStore.loadPlans();
    productsStore.loadProducts();
    productsStore.initProducts();
  });
</script>

<Header />
{@render children()}
<Footer />
