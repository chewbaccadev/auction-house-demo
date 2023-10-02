'use client';

import { useWallet } from '@solana/wallet-adapter-react';

const ConnectButton = () => {
  const { wallet } = useWallet();

  return (
    <button
      onClick={() => {
        console.log('clicked', window.phantom.solana);
        window.phantom.solana.connect();
      }}
    >
      Connect
    </button>
  );
};

export default ConnectButton;
