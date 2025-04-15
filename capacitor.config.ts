import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'DiscoverGalway',
  webDir: 'www',

  plugins: {
    SplashScreen: {
      launchAutoHide: true,
      splashFullScreen: false,
      splashImmersive: false
    }
  }
  
}

export default config;
