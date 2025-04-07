import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgoConfig: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false,  
          },
        ],
      },
    }),
  ],
});
