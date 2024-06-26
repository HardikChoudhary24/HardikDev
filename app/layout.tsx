import type { Metadata } from "next";
import { Inter, Rubik_Mono_One, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const rubik = Rubik_Mono_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-rubik",
});
const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-roboto_mono",
});

export const metadata: Metadata = {
  title: "HardikDev",
  description: "Hardik Full Stack Developer's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} ${roboto_mono.className} overflow-x-hidden customScrollbar`}
      >
        {children}
      </body>
    </html>
  );
}
