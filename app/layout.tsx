import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SSSSO Andhra Pradesh | Love in action",
  description: "Sri Sathya Sai Seva Organisation, Andhra Pradesh — service, education and spiritual care in action.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
