import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@/components/providers/themeProviders';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider
        attribute='class'
        defaultTheme='dark'
        enableSystem={false}
        storageKey='lucid-theme'
      >
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
    </ClerkProvider>
  )
}
