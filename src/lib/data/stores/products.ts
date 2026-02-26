import { writable, derived } from 'svelte/store';
import { productsService } from '../services/productsService';
import type { Product, ProductCartItem, ProductCart, ProductFilter, ProductSort } from '../types/products';

const products = writable<Product[]>([]);
const isLoading = writable(false);
const error = writable<Error | null>(null);
const searchQuery = writable('');
const filters = writable<ProductFilter>({});
const sortBy = writable<ProductSort>('name');
const cart = writable<ProductCart>({ items: [], total: 0, currency: '$' });
const favorites = writable<Product[]>([]);
const recentlyViewed = writable<Product[]>([]);

function initProducts() {
  try {
    const savedCart = localStorage.getItem('sds-cart');
    if (savedCart) cart.set(JSON.parse(savedCart));
    const savedFavs = localStorage.getItem('sds-favorites');
    if (savedFavs) favorites.set(JSON.parse(savedFavs));
    const savedRecent = localStorage.getItem('sds-recently-viewed');
    if (savedRecent) recentlyViewed.set(JSON.parse(savedRecent));
  } catch {
    // ignore localStorage errors
  }
}

cart.subscribe((value) => {
  try { localStorage.setItem('sds-cart', JSON.stringify(value)); } catch { /* ignore */ }
});
favorites.subscribe((value) => {
  try { localStorage.setItem('sds-favorites', JSON.stringify(value)); } catch { /* ignore */ }
});
recentlyViewed.subscribe((value) => {
  try { localStorage.setItem('sds-recently-viewed', JSON.stringify(value)); } catch { /* ignore */ }
});

async function loadProducts() {
  isLoading.set(true);
  error.set(null);
  try {
    const allProducts = await productsService.getProducts();
    products.set(allProducts);
  } catch (err) {
    error.set(err as Error);
  } finally {
    isLoading.set(false);
  }
}

function search(query: string) {
  searchQuery.set(query);
}

function setFilters(newFilters: ProductFilter) {
  filters.set(newFilters);
}

function setSortBy(sort: ProductSort) {
  sortBy.set(sort);
}

const filteredProducts = derived(
  [products, searchQuery, filters, sortBy],
  ([$products, $searchQuery, $filters, $sortBy]) => {
    let result = $products;
    if ($searchQuery) {
      result = productsService.searchProducts(result, $searchQuery);
    }
    if (Object.keys($filters).length > 0) {
      result = productsService.filterProducts(result, $filters);
    }
    result = productsService.sortProducts(result, $sortBy);
    return result;
  }
);

function addToCart(product: Product, quantity = 1) {
  cart.update((c) => {
    const existingIndex = c.items.findIndex((item) => item.product.id === product.id);
    let newItems: ProductCartItem[];
    if (existingIndex >= 0) {
      newItems = c.items.map((item, i) =>
        i === existingIndex ? { ...item, quantity: item.quantity + quantity } : item
      );
    } else {
      newItems = [...c.items, { product, quantity }];
    }
    const total = newItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    return { items: newItems, total, currency: c.currency };
  });
}

function removeFromCart(productId: string) {
  cart.update((c) => {
    const newItems = c.items.filter((item) => item.product.id !== productId);
    const total = newItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    return { items: newItems, total, currency: c.currency };
  });
}

function updateCartQuantity(productId: string, quantity: number) {
  cart.update((c) => {
    const newItems = quantity <= 0
      ? c.items.filter((item) => item.product.id !== productId)
      : c.items.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        );
    const total = newItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    return { items: newItems, total, currency: c.currency };
  });
}

function clearCart() {
  cart.set({ items: [], total: 0, currency: '$' });
}

function toggleFavorite(product: Product) {
  favorites.update((favs) => {
    const exists = favs.some((f) => f.id === product.id);
    return exists ? favs.filter((f) => f.id !== product.id) : [...favs, product];
  });
}

function addRecentlyViewed(product: Product) {
  recentlyViewed.update((recent) => {
    const filtered = recent.filter((p) => p.id !== product.id);
    return [product, ...filtered].slice(0, 10);
  });
}

function clearError() {
  error.set(null);
}

export const productsStore = {
  products,
  filteredProducts,
  isLoading,
  error,
  searchQuery,
  filters,
  sortBy,
  cart,
  favorites,
  recentlyViewed,
  loadProducts,
  initProducts,
  search,
  setFilters,
  setSortBy,
  addToCart,
  removeFromCart,
  updateCartQuantity,
  clearCart,
  toggleFavorite,
  addRecentlyViewed,
  clearError,
};
