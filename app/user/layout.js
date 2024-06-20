import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/ui/Header";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "ITHub | Справки",
    description: "Сервис для выдачи справок в IThub",
};

export default function UserLayout({ children }) {



    return (

        <div className="flex">
            <Header />
            <div className="mx-auto my-auto">{children}</div>

        </div>
    );
}
