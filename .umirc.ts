export default {
  npmClient: 'pnpm',
  routes: [
    { path: '/', redirect: '/scanner' },
    { path: '/scanner', component: 'scanner' },
  ],
  outputPath: 'mou-scan/build',
  history: { type: 'hash' },
  publicPath: process.env.NODE_ENV === 'production' ? '/mou-scan/build/' : '/',
};
