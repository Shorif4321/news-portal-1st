import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import Footer from "@/components/shared/Footer";


export const metadata = {
  title: "Dragon News",
  description: "news portal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>
        <Navbar></Navbar>
        <div className="min-h-screen container mx-auto">
          {children}
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}
