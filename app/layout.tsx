import { Press_Start_2P } from "next/font/google";
import "./globals.css";

const pressStart = Press_Start_2P({ weight: ["400"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pressStart.className}>{children}</body>
    </html>
  );
}
