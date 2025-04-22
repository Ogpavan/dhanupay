import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Dhanupay',
        short_name: 'Dhanupay',
        description: 'Fast, secure, and seamless digital payments with Dhanupay.',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0f52ba',
        icons: [
        
          {
            src: '/icons/dhanupay.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/icons/dhanupay.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
