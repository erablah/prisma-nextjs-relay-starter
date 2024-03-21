import { Navbar } from "./navbar"
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
                {children}
            </main>
        </div>
    )
}