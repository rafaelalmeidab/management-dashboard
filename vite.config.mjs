import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import jsconfigPaths from 'vite-jsconfig-paths';

// Configuração do Vite
export default defineConfig({
  plugins: [
    react(),       // Plugin para suporte a React
    jsconfigPaths() // Plugin para suporte a caminhos configuráveis no JS/TS
  ],
  base: '/',  // Base URL para o projeto, se necessário
  define: {
    global: 'window' // Definindo 'global' como 'window' para compatibilidade
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'node_modules'), // Alias para node_modules
      'src': path.resolve(__dirname, 'src') // Alias para src
    }
  },
  server: {
    open: false, // Desativa a abertura automática do navegador
    port: 5174,  // Porta para o servidor de desenvolvimento
    host: true,  // Permite que o servidor seja acessível a partir de qualquer endereço IP
    hmr: {
      // Configuração para Hot Module Replacement
      protocol: 'ws',
      port: 5174
    }
  },
  preview: {
    open: false, // Desativa a abertura automática do navegador na pré-visualização
    port: 5174,  // Porta para a pré-visualização
    host: true   // Permite que o servidor seja acessível a partir de qualquer endereço IP
  }
});
