import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FreedomArboriculture, odborné arboristické poradenství",
  description:
    "Dendrologické posudky a zpracování žádosti o povolení kácení, dendrologické průzkumy, úprava stanovištních poměrů dřevin, aplikace stromové injektáže, projektování nových výsadeb, ochrana stromů přI stavební činnosti.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
