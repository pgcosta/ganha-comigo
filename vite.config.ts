import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Git Hub Pages configuration
  base: "/docs/",
  build: {
    outDir: "dist",
    sourcemap: false, // Disable for production size
    // Ensure all assets go to correct relative paths for GH Pages
    rollupOptions: {
      output: {
        assetFileNames: '[name].[ext][hash]',
        chunkFileNames: '[name].[hash].js',
        entryFileNames: '[name].[hash].js'  
      }
    }
  },
}));
