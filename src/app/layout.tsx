import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { LoadingProvider } from "@/context/LoadingContext";

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
          <LoadingProvider>
            <header style={{ position: 'sticky', top: 0, zIndex: 100 }}>
              <Navbar />
            </header>
            <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              {children}
            </main>
            <Footer />
          </LoadingProvider>
        </AuthProvider>
      </body>
    </html>
  );
}


