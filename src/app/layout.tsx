import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "pindd.xyz - Transformamos tus ideas en software",
  description: "Fábrica de software a la medida. 100% digital, sin bullshit. Desarrollo web, mobile y staff augmentation.",
  keywords: "desarrollo web, software a medida, aplicaciones móviles, staff augmentation, pindd.xyz",
  authors: [{ name: "pindd.xyz" }],
  openGraph: {
    title: "pindd.xyz - Transformamos tus ideas en software",
    description: "Fábrica de software a la medida. 100% digital, sin bullshit.",
    url: "https://pindd.xyz",
    siteName: "pindd.xyz",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
