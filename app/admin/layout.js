import { Inter } from "next/font/google";
import "../globals.css";
import HeaderAdmin from "@/components/ui/HeaderAdmin";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Админ | Справки",
    description: "Сервис для выдачи справок в IThub",
};

export default function AdminLayout({ children }) {



    return (

        <div className="flex" style={{ height: 100 + 'vh' }}>
            <HeaderAdmin />
            <div className="mx-auto my-auto">{children}</div>
        </div>

    );
}
