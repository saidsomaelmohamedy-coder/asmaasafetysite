import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "احمِ نفسك من الخطر",
  description: "موقع تعليمي تفاعلي لذوي الإعاقة العقلية البسيطة.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={cairo.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
