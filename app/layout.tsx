import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Citizen Day — Community Action",
  description: "Volunteer and environmental events catalog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
