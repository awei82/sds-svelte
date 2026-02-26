<script lang="ts">
  import { isMobile, isTablet } from '$lib/ui/hooks/useMediaQuery';
  import { productsStore } from '$lib/data/stores/products';
  import Section from '$lib/ui/layout/Section/Section.svelte';
  import Flex from '$lib/ui/layout/Flex/Flex.svelte';
  import FlexItem from '$lib/ui/layout/Flex/FlexItem.svelte';
  import Search from '$lib/ui/primitives/Search/Search.svelte';
  import TagButton from '$lib/ui/primitives/Tag/TagButton.svelte';
  import ProductInfoCard from '$lib/ui/compositions/Cards/ProductInfoCard.svelte';
  import Image from '$lib/ui/primitives/Image/Image.svelte';
  import IconChevronDown from '$lib/ui/icons/IconChevronDown.svelte';
  import IconChevronUp from '$lib/ui/icons/IconChevronUp.svelte';
  import type { Product } from '$lib/data/types/products';

  let searchTerm = $state('');
  let sortPrice: -1 | 0 | 1 = $state(0);
  let filterTopRated = $state(false);

  type SectionPadding = '600' | '800' | '1200' | '1600' | '4000';
  type FlexGap = '100' | '200' | '300' | '400' | '600' | '800' | '1200' | '1600';

  let flexGap: FlexGap = $derived($isMobile ? '600' : '1200');
  let sectionPadding: SectionPadding = $derived($isMobile ? '600' : '1600');

  let products: Product[] = $state([]);
  let isLoading = $state(false);

  productsStore.products.subscribe((v) => (products = v));
  productsStore.isLoading.subscribe((v) => (isLoading = v));

  let filteredProducts = $derived.by(() => {
    let result = products.filter(
      (product) => !filterTopRated || product.rating >= 4.75,
    );
    if (searchTerm) {
      result = result.filter(
        (product) =>
          product.name.match(new RegExp(searchTerm, 'i')) ||
          product.description.match(new RegExp(searchTerm, 'i')),
      );
    }
    return result;
  });

  let sortedProducts = $derived.by(() => {
    const sorted = [...filteredProducts];
    if (sortPrice !== 0) {
      sorted.sort((a, b) => (a.price > b.price ? sortPrice : -sortPrice));
    }
    return sorted;
  });

  function handleSearch(value: string) {
    searchTerm = value;
  }

  function toggleTopRated() {
    filterTopRated = !filterTopRated;
  }

  function cycleSortPrice() {
    if (sortPrice === 0) sortPrice = -1;
    else if (sortPrice === -1) sortPrice = 1;
    else sortPrice = 0;
  }
</script>

<Section padding={sectionPadding} variant="stroke">
  <Flex container wrap gap={flexGap} alignPrimary="stretch">
    <Flex direction="column" gap="1200" alignSecondary="stretch">
      <Flex
        alignPrimary="space-between"
        alignSecondary="center"
        type="third"
        wrap
        gap="400"
      >
        <FlexItem size="minor">
          <Flex alignPrimary="stretch">
            <Search
              placeholder="Search"
              value={searchTerm}
              onSearch={handleSearch}
            />
          </Flex>
        </FlexItem>
        <FlexItem>
          <Flex gap="200">
            <TagButton
              onclick={toggleTopRated}
              variant={filterTopRated ? 'primary' : 'secondary'}
            >
              Top rated
            </TagButton>
            <TagButton
              variant={sortPrice === 0 ? 'secondary' : 'primary'}
              onclick={cycleSortPrice}
            >
              Price
              {#if sortPrice === 0 || sortPrice === -1}
                <IconChevronDown />
              {:else}
                <IconChevronUp />
              {/if}
            </TagButton>
          </Flex>
        </FlexItem>
      </Flex>
      <Flex type="third" wrap gap="600">
        {#if isLoading}
          {#each Array(6) as _}
            <ProductInfoCard heading="" price="" description="" rating={0} />
          {/each}
        {:else}
          {#each sortedProducts as product}
            <FlexItem size={$isTablet ? 'half' : 'minor'}>
              <ProductInfoCard
                heading={product.name}
                price={product.price.toString()}
                description={product.description}
                rating={product.rating}
              >
                {#snippet asset()}
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    aspectRatio="4-3"
                    class="product-info-card-asset"
                  />
                {/snippet}
              </ProductInfoCard>
            </FlexItem>
          {/each}
        {/if}
      </Flex>
    </Flex>
  </Flex>
</Section>
