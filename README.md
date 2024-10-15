# Next.js Demo Project

This is a **Next.js Demo Project** showcasing various features of Next.js, including **client-side and server-side rendering**, **dynamic routing**, **API routes**, and more. This project demonstrates how to build fast, scalable, and modern web applications with Next.js.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Project Structure](#project-structure)
- [Available Pages](#available-pages)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Using API Routes](#using-api-routes)
- [Learn More About Next.js](#learn-more-about-nextjs)
- [License](#license)

---

## Introduction

This project demonstrates the core concepts of **Next.js**, a React framework for building production-ready web applications. It covers:
- Client-side and server-side rendering.
- Modular components with CSS modules and global styling.
- API routes for dynamic data fetching.
- Clean URL management using dynamic and nested routes.

---

## Features

✔️ **Client-side Products List**: Dynamic data fetching using React's `useEffect` hook.  
✔️ **Server-side Products List**: SEO-friendly server-side rendering with Next.js.  
✔️ **Nested Routes**: Clean and intuitive URLs with dynamic route parameters.  
✔️ **User Profiles**: Displaying user data based on route parameters.  
✔️ **API Routes for Posts**: Fetching data using custom API routes built with Next.js.  
✔️ **Reusable Navbar**: Client-side routing with the `next/link` component.  
✔️ **Global and Modular Styling**: Scoped CSS modules for component-level styling.  


---

## Available Pages

- **Home Page**: Provides an overview of the project.  
- **Client-side Products List**: `/productsList` – Uses `useEffect` to fetch product data dynamically.  
- **Server-side Products List**: `/ssProductsList` – Demonstrates server-side rendering for SEO.  
- **User Profiles**: `/users/1` – Displays user details based on route parameters.  
- **Posts List**: `/posts` – Fetches and displays a list of posts using Next.js API routes.  
- **About Us**: `/about` – Static page describing the project.

---

## Installation

Make sure you have **Node.js** installed on your machine.

1. Clone the repository:

   ```bash
   git clone https://gitlab.silvertouch.com/LuckyPatel/next-js-demo.git
   cd next-js-demo

2. Install dependencies:
  ```bash
  npm install


## Running the Project
 ```bash
 npm run dev


The application will be available at:
http://localhost:3000 

```


## For a production build:

```bash
npm run build
npm start
```

## Using API Routes
This project includes a custom API route for fetching posts. You can find the route under:
```bash
/api/fetchPosts
```

Example usage:
```javascript 
const fetchPosts = async () => {
  const response = await fetch('/api/fetchPosts');
  const data = await response.json();
  console.log(data);
};
```

## Learn More About Next.js
To learn more about Next.js, check out the following resources:

https://nextjs.org/docs – Official documentation.
https://nextjs.org/learn – Interactive Next.js course.
https://github.com/vercel/next.js/ – Explore the Next.js source code.

## License
This project is open-source and available under the MIT License. 