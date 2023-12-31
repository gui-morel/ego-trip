/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react-swc';
import million from 'million/compiler';
import { visualizer } from 'rollup-plugin-visualizer';
import type { PluginOption } from 'vite';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/ego-trip/',
  plugins: [
    million.vite({ auto: true }),
    react(),
    checker({
      typescript: true
    }),
    tsConfigPaths(),
    visualizer({ template: 'sunburst' }) as unknown as PluginOption,
  ],
  server: {
    open: true,
  },
});
