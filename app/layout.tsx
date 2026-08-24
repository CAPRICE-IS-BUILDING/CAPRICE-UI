import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "CAPRICE V6.1 — Neural Command Center", description: "Secure online-first department command interface" };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
