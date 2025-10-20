import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
// @ts-ignore: Allow side-effect CSS import without type declarations
import "./globals.css"

// ✅ import ของ sidebar ที่เราเพิ่งติดตั้ง
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

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
  description: "A demo app with Sidebar and CRUD",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}
      >
        {/* ✅ ครอบทั้งแอปด้วย SidebarProvider */}
        <SidebarProvider>
          {/* ✅ Sidebar ทางซ้าย */}
          <AppSidebar />

          {/* ✅ พื้นที่เนื้อหาหลัก */}
          <main className="flex-1 p-6">
            <SidebarTrigger /> {/* ปุ่ม toggle */}
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  )
}
