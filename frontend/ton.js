import { TonConnectUI } from 'https://unpkg.com/@tonconnect/ui@latest/dist/tonconnect-ui.min.js';

export const tonConnectUI = new TonConnectUI({
  manifestUrl: 'https://YOURDOMAIN.com/tonconnect-manifest.json'
});

export async function connectWallet() {
  await tonConnectUI.connectWallet();
}