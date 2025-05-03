// app/layout.jsx or app/layout.tsx
import './globals.css'; // or your Tailwind CSS entry point
import Navbar from '@/components/Navbar/Navbar'; // adjust path as needed

export const metadata = {
  title: 'Your App Title',
  description: 'Your app description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-24"> {/* Adds space below fixed navbar */}
          {children}
        </main>
      </body>
    </html>
  );
}
