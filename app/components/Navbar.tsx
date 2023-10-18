import Image from "next/image"
import { FiMenu } from "react-icons/fi"
import { MdClose } from "react-icons/md"
import logo from '@/public/moonlamplogo.png'
import { useState } from "react"

const Navbar = () => {
    const [openMobielMenu, setOpenMobileMenu] = useState(false)
    return (
        <nav>
            <div className="w-[89%] m-auto flex justify-between items-center max-w-[1400px]">
                <Image src={logo} width={200} height={200} alt="logo" />
                <ul className={`md:flex items-center gap-8 mb:static absolute text-gray-600 ${openMobielMenu ? "top-12 py-10 w-full bg-background left-0 text-center space-y-10 text-white drop-shadow-lg z-20" : "hidden"}`}></ul>
            </div>
        </nav>
    )
}

export default Navbar