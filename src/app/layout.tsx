import "./globals.css";
import { Playfair_Display } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navbar from "@/components/Navbar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--playfair-font",
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
  const stars = Array.from({ length: 500 }).map((_, i) => {
    const size = Math.random() * 3 + 1;
    return (
      <div
        key={i}
        className="star"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `twinkle ${Math.random() * 3 + 2}s infinite ease-in-out`,
        }}
      />
    );
  });

  return (
    <html lang="en">
      <body
        className={`overflow-x-hidden bg-black text-lg text-white ${playfair.className} relative`}
      >
        {stars}

        <Navbar />
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
      </body>
    </html>
  );
}
