import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import {VitePWA} from "vite-plugin-pwa";
// import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin(),
      VitePWA({
        registerType: 'autoUpdate',
        injectRegister: 'auto',
        manifest: {
          name: "Student Card",
          short_name: "Student Card",
          description: "Customizable student card app to fool companies",
          theme_color: "#9ea701",
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        },
        devOptions: {
          enabled: true,
        }
      })
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
