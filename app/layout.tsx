import Link from "next/link"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"
import { GeistSans } from 'geist/font/sans';
import Image from "next/image"
import Logo from "@/components/logo"
import ClientOnly from "@/components/client-only"

export const metadata = {
  title: "Burokku Blog",
  description: "All things Burokku",
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
                  <ClientOnly>
                    <Logo />
                  </ClientOnly>
                  <ModeToggle />
                </div>
                <nav className="flex ml-auto text-sm font-medium space-x-6">
                  <Link href="https://burokku.one/">Home</Link>
                  <Link href="https://app.burokku.one/">App</Link>
                  <Link href="https://docs.burokku.one/">Docs</Link>
                  <Link
                    href={`https://twitter.com/burokku_one`}
                    target="_blank"
                    aria-label={`X formerly known as Twitter`}
                    className="inline-block my-auto"
                  >
                    <Image
                      src={`/twitter-x.svg`}
                      alt={`X formerly known as Twitter`}
                      width={12}
                      height={12}
                    />
                  </Link>
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
