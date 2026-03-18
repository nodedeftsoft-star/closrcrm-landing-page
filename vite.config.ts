
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';

  export default defineConfig({
    plugins: [react()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        'vaul@1.1.2': 'vaul',
        'sonner@2.0.3': 'sonner',
        'recharts@2.15.2': 'recharts',
        'react-resizable-panels@2.1.7': 'react-resizable-panels',
        'react-hook-form@7.55.0': 'react-hook-form',
        'react-day-picker@8.10.1': 'react-day-picker',
        'next-themes@0.4.6': 'next-themes',
        'lucide-react@0.487.0': 'lucide-react',
        'input-otp@1.4.2': 'input-otp',
        'figma:asset/f7a21dbaaf00a4051b7bf4df8cda48411d4d60ae.png': path.resolve(__dirname, './src/assets/f7a21dbaaf00a4051b7bf4df8cda48411d4d60ae.png'),
        'figma:asset/f6edc2d13c2a8fc421fb8bb227ba6854d4352d78.png': path.resolve(__dirname, './src/assets/f6edc2d13c2a8fc421fb8bb227ba6854d4352d78.png'),
        'figma:asset/ce5266c06c9c01d489389651a31afb0a4daa1256.png': path.resolve(__dirname, './src/assets/ce5266c06c9c01d489389651a31afb0a4daa1256.png'),
        'figma:asset/bbc687525de088fe9dd5de46b95a72d3b6f923d6.png': path.resolve(__dirname, './src/assets/bbc687525de088fe9dd5de46b95a72d3b6f923d6.png'),
        'figma:asset/ae6165592df26dc3d8972f30d12af591a80510c1.png': path.resolve(__dirname, './src/assets/ae6165592df26dc3d8972f30d12af591a80510c1.png'),
        'figma:asset/701907b3a26e44e09f1c1a3167198cdc767fc387.png': path.resolve(__dirname, './src/assets/701907b3a26e44e09f1c1a3167198cdc767fc387.png'),
        'figma:asset/601d0fd130a4dc94e37bf27c1c5e73ecadd672f6.png': path.resolve(__dirname, './src/assets/601d0fd130a4dc94e37bf27c1c5e73ecadd672f6.png'),
        'figma:asset/5b26243e86a2a01aa93842e0b0cfdcc4595668fd.png': path.resolve(__dirname, './src/assets/5b26243e86a2a01aa93842e0b0cfdcc4595668fd.png'),
        'figma:asset/553fd9d4fa8743708bc8969f3f65e29d0bf04a76.png': path.resolve(__dirname, './src/assets/553fd9d4fa8743708bc8969f3f65e29d0bf04a76.png'),
        'figma:asset/488875195ff2dd64ee1af0880186edb0f38fd31f.png': path.resolve(__dirname, './src/assets/488875195ff2dd64ee1af0880186edb0f38fd31f.png'),
        'embla-carousel-react@8.6.0': 'embla-carousel-react',
        'cmdk@1.1.1': 'cmdk',
        'class-variance-authority@0.7.1': 'class-variance-authority',
        '@radix-ui/react-tooltip@1.1.8': '@radix-ui/react-tooltip',
        '@radix-ui/react-toggle@1.1.2': '@radix-ui/react-toggle',
        '@radix-ui/react-toggle-group@1.1.2': '@radix-ui/react-toggle-group',
        '@radix-ui/react-tabs@1.1.3': '@radix-ui/react-tabs',
        '@radix-ui/react-switch@1.1.3': '@radix-ui/react-switch',
        '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
        '@radix-ui/react-slider@1.2.3': '@radix-ui/react-slider',
        '@radix-ui/react-separator@1.1.2': '@radix-ui/react-separator',
        '@radix-ui/react-select@2.1.6': '@radix-ui/react-select',
        '@radix-ui/react-scroll-area@1.2.3': '@radix-ui/react-scroll-area',
        '@radix-ui/react-radio-group@1.2.3': '@radix-ui/react-radio-group',
        '@radix-ui/react-progress@1.1.2': '@radix-ui/react-progress',
        '@radix-ui/react-popover@1.1.6': '@radix-ui/react-popover',
        '@radix-ui/react-navigation-menu@1.2.5': '@radix-ui/react-navigation-menu',
        '@radix-ui/react-menubar@1.1.6': '@radix-ui/react-menubar',
        '@radix-ui/react-label@2.1.2': '@radix-ui/react-label',
        '@radix-ui/react-hover-card@1.1.6': '@radix-ui/react-hover-card',
        '@radix-ui/react-dropdown-menu@2.1.6': '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
        '@radix-ui/react-context-menu@2.2.6': '@radix-ui/react-context-menu',
        '@radix-ui/react-collapsible@1.1.3': '@radix-ui/react-collapsible',
        '@radix-ui/react-checkbox@1.1.4': '@radix-ui/react-checkbox',
        '@radix-ui/react-avatar@1.1.3': '@radix-ui/react-avatar',
        '@radix-ui/react-aspect-ratio@1.1.2': '@radix-ui/react-aspect-ratio',
        '@radix-ui/react-alert-dialog@1.1.6': '@radix-ui/react-alert-dialog',
        '@radix-ui/react-accordion@1.2.3': '@radix-ui/react-accordion',
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'build',
      assetsInlineLimit: 0, // Don't inline video files
    },
    assetsInclude: ['**/*.mov', '**/*.mp4'],
    server: {
      host: true,
      port: 3000,
      open: true,
      proxy: {
        '/api': {
          target: 'http://localhost:9177',
          changeOrigin: true,
          secure: false,
        }
      }
    },
  });