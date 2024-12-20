import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Script from "next/script";

interface RootLayoutProps {
  children: React.ReactNode;
}
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <Script src="https://kit.fontawesome.com/5eed2da627.js" crossOrigin="anonymous" defer/>
        <link rel="icon" href="https://cdn-icons-png.freepik.com/256/342/342741.png?ga=GA1.1.1161953521.1711967601&semt=ais_hybrid" type="image/png" />
      </head>
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col bg-[#121212]">
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
