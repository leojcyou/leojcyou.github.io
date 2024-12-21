import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";

import { Header } from "../components/layout";
import "./globals.css";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Leo You",
  description: "Leo You's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ptSerif.className}>
        <Header />
        <main
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "95vh",
            // overflow: "auto",
          }}
        >
          <div className="container mx-auto px-10">{children}</div>
        </main>
      </body>
    </html>
  );
}
