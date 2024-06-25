import "./globals.css";
import StyledComponentsRegistry from "../../lib/registry";
import Header from "@/components/Header/Header";
import { FavoritesProvider } from "@/context/FavoritesContext";
import { Roboto_Condensed } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Metadata } from "next";

const roboto = Roboto_Condensed({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zara Challenge Marvel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          <FavoritesProvider>
            <Header />
            <NextTopLoader color="#ec1d24" showSpinner={false} />
            {children}
          </FavoritesProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
