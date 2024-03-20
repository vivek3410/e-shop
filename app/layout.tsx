import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Layout } from "./components";
import { CartProvider } from "@/hooks/useCart";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "E-Shop",
  description: "E-commerece website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-slate-700`}>
        <main>
          <Toaster toastOptions={{
            style: {
              backgroundColor: 'rgb(51 65 85)',
              color: 'white',
            }
          }} />
          <CartProvider>
            <Layout>
              <div className="flex-grow">
                {children}
              </div>
            </Layout>
          </CartProvider>
        </main>
      </body>
    </html >
  );
}
