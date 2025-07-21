/// <reference types="react-scripts" />
/// <reference types="vite/client" />

import { ExternalProvider } from "@ethersproject/providers";

declare global {
  interface Window {
    ethereum?: ExternalProvider;
  }
}
