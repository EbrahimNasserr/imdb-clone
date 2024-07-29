import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import ProviderRedux from "@/components/Provider";
import SearchBox from "@/components/SearchBox";
// import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "Millions of movies, TV shows and people to discover.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderRedux>
          <Providers>
            <Header />
            <SearchBox />
            {children}
          </Providers>
        </ProviderRedux>
      </body>
    </html>
  );
}
