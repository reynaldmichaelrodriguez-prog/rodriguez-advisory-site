import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rodriguez Advisory | Finance Operations Visibility",
  description:
    "Rodriguez Advisory helps operators see CRM-to-Cash and AP-to-Payment workflows with pragmatic, AI-assisted finance operations visibility.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
