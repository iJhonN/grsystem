import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GR Nexus - Sistema de Oficinas",
  description: "Gerenciamento inteligente de ordens de serviço e frotas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="dark">
      <body className={`${inter.className} bg-[#09090b] antialiased`}>
        {/* Aqui poderemos colocar um Sidebar ou Navbar no futuro */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}