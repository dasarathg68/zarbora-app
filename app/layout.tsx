import type React from "react";
import "@/app/globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import AppKitProvider from "@/context/auth-context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata = {
  title: "Zarbora",
  description: "A decentralized Zarbora simulation using Harberger taxes",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppKitProvider>
            <div className="flex h-screen bg-background">
              <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
                <Sidebar className="border-r border-border" />
              </div>
              <div className="flex flex-1 flex-col md:pl-64">
                <Header />
                <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
                  {children}
                </main>
              </div>
            </div>
          </AppKitProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
