import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Little Surprise for Robiadut",
  description: "A little celebration for a big milestone.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
