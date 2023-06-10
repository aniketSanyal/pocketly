import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.pocketwise',
  appName: 'Pocket Wise',
  webDir: 'out',
  "server": {
    "url": "http://192.168.179.166:3000",
    "cleartext": true
  },
};

export default config;
