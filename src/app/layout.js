import { Manrope, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/shared/ScrollToTop";
import Footer from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-signature",
  display: "swap",
});

export const metadata = {
  title: "Dr. Sushant Patil Group",
  description: "Dr. Sushant Patil Group — a dynamic ecosystem of education, creativity, innovation, and social impact across seven purpose-driven institutions in Pune.",
  icons: {
    icon: "/dsp-favicon.png",
    shortcut: "/dsp-favicon.png",
    apple: "/dsp-favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${dancingScript.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
