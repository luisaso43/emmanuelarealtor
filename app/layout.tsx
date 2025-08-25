import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Pacifico, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  title: "Emmanuela Suarez - Agente Inmobiliaria de Lujo Miami",
  description: "Especialista en propiedades de lujo en Miami. Más de 2 años de experiencia ayudando a encontrar el hogar perfecto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <body
        className={`${inter.variable} ${jetbrains.variable} ${pacifico.variable} ${playfair.variable} ${poppins.variable} antialiased font-sans`}
      >
         {children}
      </body>
    </html>
  );
}