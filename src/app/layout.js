// app/layout.js
import './globals.css'; // Import global styles
import { Roboto, Lora } from 'next/font/google'; // Import Google Fonts
import Navbar from './navbar'; // Import Navbar component

// Load the fonts with customization
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] });
const lora = Lora({ subsets: ['latin'], weight: ['700'] });

export const metadata = {
  title: 'Next.js Demo',
  description: 'A simple demo using Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        <div className={lora.className}>{children}</div> {/* Apply Lora to children */}
      </body>
    </html>
  );
}
