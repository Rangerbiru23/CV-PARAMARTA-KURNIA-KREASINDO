import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CV PARAMARTA KURNIA KREASINDO - Pelatihan Kerja Pariwisata dan Perhotelan Swasta",
  description: "Lembaga pelatihan kerja terpercaya di bidang pariwisata dan perhotelan. Tingkatkan karir Anda dengan program pelatihan profesional berkualitas.",
  keywords: ["CV PARAMARTA KURNIA KREASINDO", "pelatihan pariwisata", "pelatihan perhotelan", "kerja pariwisata", "kerja perhotelan", "training hospitality", "Kediri", "Jawa Timur"],
  authors: [{ name: "CV PARAMARTA KURNIA KREASINDO" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "CV PARAMARTA KURNIA KREASINDO - Pelatihan Pariwisata dan Perhotelan",
    description: "Lembaga pelatihan kerja terpercaya di bidang pariwisata dan perhotelan",
    url: "https://paramarta-kurnia-kreasindo.com",
    siteName: "CV PARAMARTA KURNIA KREASINDO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV PARAMARTA KURNIA KREASINDO",
    description: "Pelatihan Kerja Pariwisata dan Perhotelan Swasta Terpercaya",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
