import "./globals.css";

import DashboardWrapper from "./dashboardWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inventory Management System",
  description:
    "A comprehensive inventory management system for tracking products, sales, expenses, and user management.",
  keywords: [
    "inventory",
    "management",
    "dashboard",
    "products",
    "sales",
    "expenses",
  ],
  authors: [{ name: "SONGYU CHEN" }],
  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Inventory Management System",
    description:
      "A comprehensive inventory management system for tracking products, sales, expenses, and user management.",
    siteName: "Inventory Management System",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DashboardWrapper>{children}</DashboardWrapper>
      </body>
    </html>
  );
}
