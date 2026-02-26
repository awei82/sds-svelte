import { writable } from 'svelte/store';
import { authService } from '../services/authService';
import type { User, Credentials } from '../types/auth';

const user = writable<User | null>(null);
const isLoading = writable(false);
const error = writable<Error | null>(null);

function initAuth() {
  const storedUser = authService.getCurrentUser();
  if (storedUser && authService.isAuthenticated()) {
    user.set(storedUser);
  }
}

async function login(credentials: Credentials) {
  isLoading.set(true);
  error.set(null);

  try {
    const loggedInUser = await authService.login(credentials);
    authService.storeUser(loggedInUser);
    user.set(loggedInUser);
  } catch (err) {
    error.set(err as Error);
    throw err;
  } finally {
    isLoading.set(false);
  }
}

async function logout() {
  isLoading.set(true);
  error.set(null);

  try {
    await authService.logout();
    user.set(null);
  } catch (err) {
    error.set(err as Error);
  } finally {
    isLoading.set(false);
  }
}

function clearError() {
  error.set(null);
}

export const authStore = {
  user,
  isLoading,
  error,
  login,
  logout,
  clearError,
  initAuth,
};
