import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, 
    port: 5174, 
  },
});


// Deployment ID
// AKfycbz7o8z-uWEV9kVUYKPVqGyULTx_gXWptXnH2hha85CODt893ahAfT-bizfZclJ0S2wrag

// https://script.google.com/macros/s/AKfycbz7o8z-uWEV9kVUYKPVqGyULTx_gXWptXnH2hha85CODt893ahAfT-bizfZclJ0S2wrag/exec