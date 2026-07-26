import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = "https://careers.posthire.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Careers at PostHire — Join Our Founding Team",
    template: "%s — PostHire Careers",
  },
  description:
    "PostHire is an influencer marketing platform connecting brands with content creators. We're in beta and building our founding team ahead of public launch — explore open roles and apply.",
  keywords: [
    "PostHire",
    "startup jobs",
    "founding team",
    "influencer marketing",
    "creator economy jobs",
    "remote startup roles",
  ],
  openGraph: {
    title: "Join the Founding Team of PostHire",
    description:
      "PostHire connects brands with content creators. We're in beta and hiring our founding team — explore open roles and apply.",
    url: siteUrl,
    siteName: "PostHire Careers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join the Founding Team of PostHire",
    description:
      "PostHire connects brands with content creators. We're in beta and hiring our founding team — explore open roles and apply.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
