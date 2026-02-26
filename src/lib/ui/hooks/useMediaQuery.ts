import { readable } from 'svelte/store';
import { browser } from '$app/environment';

const breakpoints = {
  mobile: 375,
  tablet: 600,
  desktop: 1024,
};

function createMediaQueryStore(mediaQuery: string) {
  return readable(false, (set) => {
    if (!browser) return;
    const mediaQueryList = globalThis.matchMedia(mediaQuery);
    set(mediaQueryList.matches);

    function onChange() {
      set(mediaQueryList.matches);
    }

    mediaQueryList.addEventListener('change', onChange);
    return () => mediaQueryList.removeEventListener('change', onChange);
  });
}

export const isMobile = createMediaQueryStore(
  `(max-width: ${breakpoints.tablet - 1}px)`
);
export const isTablet = createMediaQueryStore(
  `(min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.desktop - 1}px)`
);
export const isDesktop = createMediaQueryStore(
  `(min-width: ${breakpoints.desktop}px)`
);
export const isTabletUp = createMediaQueryStore(
  `(min-width: ${breakpoints.tablet}px)`
);
export const isTabletDown = createMediaQueryStore(
  `(max-width: ${breakpoints.desktop - 1}px)`
);
