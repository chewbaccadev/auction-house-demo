'use client';

import WalletMultiButton from '@/src/components/WalletMultiButton/WalletMultiButton';

type Props = {};

const Connect = (props: Props) => {
  return (
    <div style={{display:'grid', placeItems:'center', minHeight:'100vh'}}>
      <WalletMultiButton></WalletMultiButton>
    </div>
  );
};

export default Connect;
