import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";
import Link from "next/link";
config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cafe 42",
  description: "No secret ingredients. Its our love",
};

export default function RootLayout({ children }) {
  return (
    <>
    <Head>
      <Link rel='icon' href='/favicon.ico'></Link>

    </Head>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
