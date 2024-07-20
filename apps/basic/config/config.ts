import { defineConfig } from 'umi';

import { routes } from './routes';

export default defineConfig({
  routes,
  npmClient: 'pnpm',
  https: false,
  svgr: {},
  title: 'XFlow Basic',
  favicons: ['/favicon.ico'],
  mfsu: false,
  esbuildMinifyIIFE: true,
});
