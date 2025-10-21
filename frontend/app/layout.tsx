import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
// @ts-ignore: Allow side-effect CSS import without type declarations
import "./globals.css"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ThemeProvider } from "@/components/theme-provider"

// ✅ เพิ่ม import ปุ่ม toggle
import { ModeToggle } from "@/components/mode-toggle"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Next.js + Shadcn UI Demo",
  description: "A demo app with Sidebar and CRUD + Dark Mode",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />

            {/* ✅ พื้นที่หลัก */}
            <main className="flex-1 p-6 relative">
              <SidebarTrigger />

              {/* ✅ ปุ่ม toggle มุมขวาบน */}
              <div className="absolute top-4 right-4">
                <ModeToggle />
              </div>

              {children}
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
