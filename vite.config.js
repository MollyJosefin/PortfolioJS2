import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Uppdatera detta med ditt GitHub repo-namn
export default defineConfig({
  plugins: [react()],
  base: '/PortfolioJS2/', // Ändra till ditt repo-namn
});