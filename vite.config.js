import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    root: "views", // Setting views as the root
    publicDir: "../public", // Keeping public assets
    resolve: {
        extensions: ['.js', '.jsx'], // Ensure Vite recognizes JSX files
    },
});
