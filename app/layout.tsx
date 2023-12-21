import Link from "next/link"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"
import { GeistSans } from 'geist/font/sans';

export const metadata = {
  title: "Kazu Blog",
  description: "Kazu Blog - All things Kazu",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 ${GeistSans.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto py-10 px-4">
            <header>
              <div className="flex items-center justify-between">
                <div className="flex gap-x-3">
                  <Link className="font-bold text-xl z-50"
                    href="/"
                  >
                    Kazu
                  </Link>
                  <ModeToggle />
                </div>
                <nav className="ml-auto text-sm font-medium space-x-6">
                  <Link href="/">Blog</Link>
                  <Link href="/">Home</Link>
                  <Link href="/">App</Link>
                </nav>
              </div>
            </header>
            <main>{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
