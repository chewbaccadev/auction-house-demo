import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>I want to:</h1>
        <Link href={'/mint'}>Mint</Link>
        <Link href={'/buy'}>Buy</Link>
        <Link href={'/sell'}>Sell</Link>
      </div>
    </main>
  );
}
