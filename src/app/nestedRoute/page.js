// app/nestedRoutes/page.js
'use client';
import Link from 'next/link';
import styles from './NestedRoutes.module.css';

const items = [
  { id: 1, title: 'Item 1' },
  { id: 2, title: 'Item 2' },
  { id: 3, title: 'Item 3' },
];

export default function NestedRoutesPage() {
  return (
    <div className={styles.container}>
      <h1>Items</h1>
      <ul className={styles.itemList}>
        {items.map((item) => (
          <li key={item.id} className={styles.item}>
            <Link href={`/nestedRoute/${item.id}`} className={styles.link}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
