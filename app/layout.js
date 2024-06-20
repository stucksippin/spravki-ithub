import { Inter } from "next/font/google";
import "./globals.css";





const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ITHub | Справки",
  description: "Сервис для выдачи справок в IThub",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html >
  );
}
