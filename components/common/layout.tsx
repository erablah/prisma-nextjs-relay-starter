import { Navbar } from "./Navbar"
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className={`flex-1 min-h-screen items-center justify-between ${inter.className}`}>
                {children}
            </main>
        </div>
    )
}