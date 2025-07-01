
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.b3002d3c4b17441aa5e29ad25eb5d50b',
  appName: 'quiz-kids-adventure-land',
  webDir: 'dist',
  server: {
    url: 'https://b3002d3c-4b17-441a-a5e2-9ad25eb5d50b.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#6FAADB',
      showSpinner: false
    }
  }
};

export default config;
