import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Propaly — All-in-One Real Estate Platform",
  description: "Launch, manage, and grow your real estate business with Propaly.",

  metadataBase: new URL("https://propaly.app"),

  openGraph: {
    title: "Propaly — All-in-One Real Estate Platform",
    description:
      "Launch, manage, and grow your real estate business with Propaly.",
    url: "https://propaly.app",
    siteName: "Propaly",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Propaly platform preview",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Propaly — All-in-One Real Estate Platform",
    description:
      "Launch, manage, and grow your real estate business with Propaly.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
