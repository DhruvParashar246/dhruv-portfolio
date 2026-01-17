import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dhruv Parashar",
  description: "CS @ Rutgers — Software + ML + Computer Vision",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
