'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { useEffect } from 'react';

type Props = { children: React.ReactNode };

const WalletListeners = ({ children }: Props) => {
  const { wallet } = useWallet();

  useEffect(() => {
    wallet?.adapter.on('connect', () => {
      console.log('connected');
    });

    wallet?.adapter.on('disconnect', () => {
      console.log('disconnected');
    });

    (window as any).phantom.solana.on('accountChanged', (key: any) => {
      wallet?.adapter.disconnect();
    });

    return () => {
      console.log('return');

      wallet?.adapter.off('connect');

      wallet?.adapter.off('disconnect');

      (window as any).phantom.solana.off('accountChanged');
    };
  }, [wallet]);

  return <div>{children}</div>;
};

export default WalletListeners;
