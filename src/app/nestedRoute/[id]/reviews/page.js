// app/nestedRoutes/[id]/reviews/page.js
'use client';
import { useParams } from 'next/navigation';
import styles from "../../NestedRoutes.module.css"

export default function ItemReviewsPage() {
  const { id } = useParams(); // Extract item ID from the route

  return (
    <div className={styles.container}>
      <h1>Reviews for Item: {id}</h1>
      <ul className={styles.itemList}>
        <li className={styles.item}>Review 1: Great item!</li>
        <li className={styles.item}>Review 2: Worth the purchase.</li>
        <li className={styles.item}>Review 3: Could use some improvements.</li>
      </ul>
    </div>
  );
}
