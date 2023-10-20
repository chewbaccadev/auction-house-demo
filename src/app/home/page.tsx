'use client';

import Link from 'next/link';
import styles from './page.module.css';
import { useWallet } from '@solana/wallet-adapter-react';
import WalletMultiButton from '@/src/components/WalletMultiButton/WalletMultiButton';

const menu = ['mint', 'buy', 'sell'];

const Home = () => {
  const { wallet } = useWallet();
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <p>{wallet?.adapter.publicKey?.toBase58()}</p>
        <WalletMultiButton/>
        <h1 className={styles.title}>I want to:</h1>
        <ul className={styles.menu}>
          {menu.map((item) => {
            return (
              <li className={styles.menuItem} key={item}>
                <Link href={`/${item}`}>{item}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Home;
