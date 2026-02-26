import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      compositions: 'src/lib/ui/compositions',
      data: 'src/lib/data',
      hooks: 'src/lib/ui/hooks',
      icons: 'src/lib/ui/icons',
      images: 'src/lib/ui/images',
      layout: 'src/lib/ui/layout',
      primitives: 'src/lib/ui/primitives',
      utils: 'src/lib/ui/utils',
    }
  }
};

export default config;
