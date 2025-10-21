import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Netflix",
  description: "Clone da netflix feito com Next.js 13 e Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
