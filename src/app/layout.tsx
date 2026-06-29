import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "LMS Platform | Enterprise Learning System",
  description: "An enterprise-grade AI-powered Learning Management System for modern professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AuthProvider>
          <header style={{ position: 'sticky', top: 0, zIndex: 100 }}>
            <Navbar />
          </header>
          <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {children}
          </main>
          <footer style={{
            padding: '2.5rem 2rem',
            textAlign: 'center',
            borderTop: '1px solid var(--border-color)',
            fontSize: '0.875rem',
            color: 'var(--text-secondary)',
            backgroundColor: '#ffffff'
          }}>
            &copy; {new Date().getFullYear()} LMS Platform. All rights reserved.
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
