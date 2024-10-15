// app/posts/page.js
'use client'; // Required for client-side components

import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './Posts.module.css';
import  Spinner  from 'react-js-loader'; // Import Spinner component

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state

  // Fetch posts from the API when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('/api/fetchPosts'); // Call custom API route
        setPosts(res.data);
      } catch (err) {
        setError('Failed to fetch posts');
        console.error(err);
      } finally {
        setLoading(false); // Stop loader once done
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <Spinner type="spinner-circle" bgColor={"#0070f3"} size={60} />
        <p>Loading posts...</p>
      </div>
    );
  }

  if (error) {
    return <p className={styles.error}>{error}</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Posts</h1>
      <ul className={styles.postList}>
        {posts.map((post) => (
          <li key={post.id} className={styles.postItem}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
