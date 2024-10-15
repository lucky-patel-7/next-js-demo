// app/nestedRoutes/[id]/page.js
'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import styles from '../NestedRoutes.module.css';

export default function ItemDetailsPage() {
  const { id } = useParams(); // Extract item ID from the route

  return (
    <div className={styles.container}>
      <h1>Item Details: {id}</h1>
      <Link href={`/nestedRoute/${id}/reviews`} className={styles.link}>
        View Reviews
      </Link>
    </div>
  );
}
