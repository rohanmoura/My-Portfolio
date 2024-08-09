import "./globals.css";
import { Work_Sans } from "next/font/google";

const WorkSans = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Rohan Moura Portfolio",
  description: "This is the Personal Portfolio Website of Rohan Moura.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${WorkSans.className} text-white`}>{children}</body>
    </html>
  );
}
