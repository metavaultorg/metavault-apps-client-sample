import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MetavaultWeb3Provider } from "./metavault-web3-porvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Metavault Client Test App",
  description: "Test Client dApp for Metavault SDKs",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MetavaultWeb3Provider>{children}</MetavaultWeb3Provider>
      </body>
    </html>
  );
}
