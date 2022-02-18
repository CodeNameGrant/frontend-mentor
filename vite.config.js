import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: 'https://codenamegrant.github.io/frontend-mentor/',
  root: '.',

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        1: resolve(__dirname, 'newbie', '3-column-preview-card-component/index.html'),
        2: resolve(__dirname, 'newbie', 'order-summary-component/index.html'),
        3: resolve(__dirname, 'newbie', 'social-proof-section/index.html')
      }
    }
  }
});
