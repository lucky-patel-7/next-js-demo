// app/users/[id]/page.js
'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './User.module.css';

export default function User() {
  const { id } = useParams(); // Extract the dynamic ID from the URL
  const router = useRouter(); // Use router for programmatic navigation

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>User Profile</h1>
      <p className={styles.id}>ID: {id}</p>

      <p className={styles.explanation}>
        This page demonstrates <strong>dynamic routing</strong>. Each user’s profile is accessed
        through a route like <code>/users/[id]</code>, where <code>[id]</code> is the user’s unique ID.
      </p>

      <div className={styles.links}>
        <Link href="/users/1" className={styles.link}>
          User 1
        </Link>
        <Link href="/users/2" className={styles.link}>
          User 2
        </Link>
        <Link href="/users/3" className={styles.link}>
          User 3
        </Link>
      </div>

      <button className={styles.button} onClick={() => router.push('/')}>
        Back to Home
      </button>
    </div>
  );
}
