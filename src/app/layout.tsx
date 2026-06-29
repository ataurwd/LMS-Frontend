import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <AuthProvider>
          <header>
            <Navbar />
          </header>
          <main style={{ flex: 1 }}>
            {children}
          </main>
          <footer style={{
            padding: '2rem',
            textAlign: 'center',
            borderTop: '1px solid #eaeaea',
            fontSize: '0.875rem',
            color: '#666'
          }}>
            &copy; {new Date().getFullYear()} LMS Platform. All rights reserved.
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}


