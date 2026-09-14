import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Adnan Dwere | Frontend Developer",
  description:
    "Portfolio of Adnan Dwere, a Junior Frontend Developer building responsive web applications with React and Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${manrope.variable} dark antialiased`}
    >
      <body className="min-h-screen relative overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container flex flex-col bg-background text-on-background">
        {children}
      </body>
    </html>
  );
}
