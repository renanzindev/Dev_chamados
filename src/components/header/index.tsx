import Link from "next/link";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import Image from "next/image";
import logo from "@/assets/carroCarsoul.png";

export function Header() {
    return (
        <header className="bg-[#1E1E2D] w-full flex items-center px-2 py-4 h-20 shadow-sm">
            <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
                <Link href="/">
                    <h1 className="font-bold text-2xl pl-1 hover:tracking-widest duration-300">
                        <span className=" text-white">DEV</span> <span className="text-white">KANBAN</span>
                    </h1>
                </Link>

                <div className="flex items-baseline gap-4">
                    <Link href="/dashboard">
                        <FaUser size={20} color="#FFF" />
                    </Link>


                    <button>
                        <FaSignOutAlt size={20} color="#FFF" />
                    </button>
                </div>
            </div>
        </header>
    )
}