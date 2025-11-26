import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Propaly",
  description: "All in one Real Estate Solution",
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
