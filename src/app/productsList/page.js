
'use client';
import React, { useEffect, useState } from 'react';
import styles from './Products.module.css';
import  Spinner  from 'react-js-loader'; 

const Page = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        
       
        setTimeout(() => {
          setProducts(data); 
          setLoading(false); 
        }, 1000);
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setLoading(false); 
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loaderContainer}>
          <Spinner type="spinner-circle" bgColor={"#0070f3"} size={60} /> 
      
        </div>
      ) : (
        <>
          <h1 className={styles.title}>Products List Client Side Fetching</h1>
          <ul className={styles.productList}>
            {products.map((product) => (
              <li key={product.id} className={styles.productItem}>
                {product.title}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Page;
