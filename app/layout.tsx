import "./globals.css";
import type { Metadata } from "next";
import { Quantico } from "next/font/google";

const quantico = Quantico({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DALE LA MANO A UN MOTERO BY @DARRANQUE – Darranque",
  description: "La pagina de D'Darranque",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/buran-ussr?styles=115558"
          rel="stylesheet"
        />
      </head>
      <body className={quantico.className}>{children}</body>
    </html>
  );
}
