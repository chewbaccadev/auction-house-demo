/**
 * Providers are client side so we need to make a separate component and render all providers inside of it.
 * Finally pass children as props and you can wrap this around the app!
 *
 * Example with context providers:
 * https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#using-context-providers
 */

'use client';

import { Adapter, WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import React, { useMemo } from 'react';
import WalletListeners from '../WalletListeners/WalletListeners';

type Props = { children: React.ReactNode };

const Providers = ({ children }: Props) => {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets: Adapter[] = [];

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <WalletListeners>{children}</WalletListeners>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default Providers;
