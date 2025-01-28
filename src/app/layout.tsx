// app/layout.tsx
import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { Inter } from "next/font/google"
// import { ThemeProvider } from "@/components/provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "After Liv Clinics",
  description: "Quality Healthcare in Tier 2 & 3 Cities",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background font-sans antialiased`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light" 
          enableSystem={false}
          forcedTheme="light"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}