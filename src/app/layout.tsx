import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ValidaPagoYa - Anti-Fraude",
  description: "Validación de transferencias bancarias en segundos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
