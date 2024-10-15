// app/Navbar.js
'use client'; // Ensures this component is treated as a client-side component

import Link from 'next/link'; // Import the Next.js Link component
import './globals.css'; // Import global CSS for consistent styling
import Image from 'next/image';
import nextLogo from "./images/png-transparent-nextjs-hd-logo-removebg-preview.png" // Import the Next.js logo

export default function Navbar() {
  return (
    <header className="navbar">
     <Image src={nextLogo} width={150} height={70}/>
      <nav>
        <ul className="nav-list">
          <li>
            <Link href="/" legacyBehavior>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/productsList" legacyBehavior>
              <a>Products List Clientside</a>
            </Link>
          </li>
          <li>
            <Link href="/ssProductsList" legacyBehavior>
              <a>Products List Serverside</a>
            </Link>
          </li>
       
          <li>
            <Link href="/posts" legacyBehavior>
              <a>Posts List</a>
            </Link>
          </li>
          <li>
            <Link href="/users/1" legacyBehavior>
              <a>Users Page (User 1)</a>
            </Link>
          </li>
          <li>
            <Link href="/nestedRoute" legacyBehavior>
              <a>Nested Route</a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a>About Us</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
