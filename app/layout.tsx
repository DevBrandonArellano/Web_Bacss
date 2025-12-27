import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from '@/app/providers/theme-provider'; // Corrected import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BACSS S.A.S. - Software de Inventarios e IA en Quito",
  description: "Consultoría experta en software de control de inventarios, inteligencia artificial y automatización de procesos para PYMES en Quito y Ecuador. Optimice su negocio con BACSS.",
  keywords: ["software inventarios", "inteligencia artificial", "automatización", "consultoría de software", "Quito", "Ecuador", "BACSS"],
  authors: [{ name: "BACSS S.A.S." }],
  robots: "index, follow",
  openGraph: {
    title: "BACSS S.A.S. - Soluciones de Software con IA en Quito",
    description: "Lideramos la transformación digital de PYMES en Ecuador con software de inventarios y soluciones de inteligencia artificial.",
    url: "https://www.bacss.com", // Replace with actual domain
    type: "website",
    locale: "es_EC",
    siteName: "BACSS S.A.S.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BACSS S.A.S. - Software de IA para Empresas en Ecuador",
    description: "Optimice su inventario y procesos con la tecnología de IA de BACSS. Consultoría de software para PYMES en Quito.",
    // site: "@bacss_sas", // Optional: Replace with Twitter handle
  },
  alternates: {
    canonical: "https://www.bacss.com", // Replace with actual domain
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // Geo tags are also part of the viewport export
  geo: {
    region: 'EC-P',
    placename: 'Quito',
    position: '-0.180653;-78.467834',
    icbm: '-0.180653, -78.467834',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-black dark:bg-bacss-dark-gray dark:text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
