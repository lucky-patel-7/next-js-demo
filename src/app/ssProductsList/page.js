
import styles from './Products.module.css'; 
import Image from 'next/image';

// Server-side fetching function
async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products');

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}

// Server component
export default async function Page() {
  const products = await getProducts();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Products List Server Side Fetching</h1>
      <ul className={styles.productList}>
        {products.map((product) => (
          <li key={product.id} className={styles.productItem}>
            <div className={styles.imageWrapper}>
              <Image 
                src={product.image} 
                alt={product.title} 
                width={150} 
                height={150} 
                className={styles.productImage}
                priority 
              />
            </div>
            <h2 className={styles.productTitle}>{product.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
