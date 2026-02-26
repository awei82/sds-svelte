import { writable } from 'svelte/store';
import { pricingService } from '../services/pricingService';
import type { PricingPlan } from '../types/pricing';

const monthlyPlans = writable<PricingPlan[]>([]);
const annualPlans = writable<PricingPlan[]>([]);
const currentPlan = writable<PricingPlan | null>(null);
const isLoading = writable(false);

async function loadPlans() {
  isLoading.set(true);
  try {
    const { monthly, annual } = await pricingService.getPlans();
    monthlyPlans.set(monthly);
    annualPlans.set(annual);
  } finally {
    isLoading.set(false);
  }
}

function setCurrentPlan(plan: PricingPlan | null) {
  currentPlan.set(plan);
}

export const pricingStore = {
  monthlyPlans,
  annualPlans,
  currentPlan,
  isLoading,
  loadPlans,
  setCurrentPlan,
};
