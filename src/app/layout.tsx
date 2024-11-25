import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import Script from 'next/script'; // Import Script from next/script
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

const raleway = Raleway({
  subsets: ["latin"], // Choose subsets if necessary
  weight: ["400", "500", "700"], // Specify font weights you need
  style: "normal", // You can specify style if needed
  variable: "--font-raleway", // This sets a custom CSS variable
});

export const metadata: Metadata = {
  title: "Beam D Plus",
  description: "SEA-Bangkok based leading technology consulting firm with solution development team from Bangalore India. With exceptional team of highly experienced professionals and expertise across multiple industries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Navbar />
        {children}
        <Footer />
        {/* Adding the Tawk.to Script */}
        <Script 
          id="tawk-to"
          strategy="afterInteractive" // Loads the script after the page is interactive
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/6743f8992480f5b4f5a37046/1idgo66mu';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
