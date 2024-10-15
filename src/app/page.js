// app/page.js
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Welcome to the Next.js Demo Project</h1>
        <p className={styles.tagline}>
          A modern framework for fast and scalable web applications.
        </p>
      </header>

      <main className={styles.main}>
        <section className={styles.intro}>
          <p className={styles.description}>
            This project demonstrates the capabilities of <strong>Next.js</strong>, a
            popular framework for building modern web applications. Here&rsquo;s what we&rsquo;ve achieved:
          </p>
          <ul className={styles.summaryList}>
            <li>✔️ <strong>Client-side Products List:</strong> Dynamic fetching with React&apos;s <code>useEffect</code> hook.</li>
            <li>✔️ <strong>Server-side Products List:</strong> SEO-friendly rendering during page load.</li>
            <li>✔️ <strong>Nested Routes:</strong> Clean URLs with dynamic routing.</li>
            <li>✔️ <strong>User Profiles:</strong> Displaying user data based on route parameters.</li>
            <li>✔️ <strong>Posts List:</strong> Demonstrating list rendering from an external API through Next.js API routes.</li>
            <li>✔️ <strong>API Routes for Posts:</strong> Using Next.js custom API routes to fetch posts dynamically and display them as a list.</li>
            <li>✔️ <strong>Reusable Navbar:</strong> Client-side routing with Next.js <code>link</code> component.</li>
            <li>✔️ <strong>Global and Modular Styling:</strong> Scoped CSS modules for styling components.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Key Pages in the Demo</h2>
          <ul className={styles.pageList}>
            <li><strong>Home Page:</strong> Overview of the project.</li>
            <li><strong>Products List (Client-side):</strong> `/productsList` – Client-side dynamic fetching.</li>
            <li><strong>Products List (Server-side):</strong> `/ssProductsList` – Server-side rendering for SEO.</li>
            <li><strong>User Profile:</strong> `/users/1` – Displaying user data based on route.</li>
            <li><strong>Posts List:</strong> `/posts` – Data fetching from external API using Next.js API routes.</li>
            <li><strong>About Us:</strong> `/about` – Static page for project description.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>What You Will Learn</h2>
          <p className={styles.description}>Explore the following concepts through this demo:</p>
          <ul className={styles.learningList}>
            <li>⚙️ Difference between client-side and server-side rendering.</li>
            <li>⚙️ Building modular and reusable components.</li>
            <li>⚙️ Managing dynamic and nested routes efficiently.</li>
            <li>⚙️ Styling with CSS modules and global CSS.</li>
            <li>⚙️ Creating and using API routes in Next.js for server-side data fetching.</li>
            <li>⚙️ SEO benefits through server-side rendering.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
