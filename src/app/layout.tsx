import "./globals.css";
import { Antic_Didone } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navbar from "@/components/Navbar";

const antic_didone = Antic_Didone({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--antic-didone-font",
});

export const metadata = {
  title: "Simon Cun",
  description:
    "I hope you learn a lot about me through my portfolio website! :D",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`overflow-x-hidden bg-black text-white ${antic_didone.className}`}
      >
        <Navbar />
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
      </body>
    </html>
  );
}
