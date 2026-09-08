import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "RedQuadrant campaign links", robots: { index: false } };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en-GB"><body>{children}</body></html>;}
