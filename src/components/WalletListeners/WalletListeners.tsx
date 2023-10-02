'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

type Props = { children: React.ReactNode };

const WalletListeners = ({ children }: Props) => {
  const { wallet } = useWallet();

  useEffect(() => {
    wallet?.adapter.on('connect', () => {
      console.log('connected', wallet);
      redirect('/home');
    });

    // return () => {
    //   console.log('connect return');
    //   wallet?.adapter.removeListener('connect');
    // };
  }, [wallet]);

  useEffect(() => {
    wallet?.adapter.on('disconnect', () => {
      console.log('disconnected', wallet);
      redirect('/');
    });

    // return () => {
    //   console.log('disconnect return');
    //   wallet?.adapter.removeListener('disconnect');
    // };
  }, [wallet]);
  return <div>{children}</div>;
};

export default WalletListeners;
