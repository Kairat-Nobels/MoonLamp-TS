"use client"
import Image from "next/image"
import Link from "next/link"
import Cart from "./Cart"
import { useCartStore } from "@/store/useCartStore"
import { FiMenu } from "react-icons/fi"
import { MdClose } from "react-icons/md"
import logo from '@/public/moonlamplogo.png'
import { useState } from "react"
import { BsCart4, BsFillBagHeartFill } from "react-icons/bs"

const Navbar = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false)
    const cartStore = useCartStore()
    const mobeleMenuHandler = () => {
        setOpenMobileMenu(!openMobileMenu)
    }
    return (
        <nav>
            <div className="w-[89%] m-auto flex justify-between items-center max-w-[1400px]">
                <Image src={logo} width={200} height={200} alt="logo" />
                <ul className={`md:flex items-center gap-8 md:static absolute text-gray-600  ${openMobileMenu
                    ? "top-16 py-10 w-full bg-secondary left-0 text-center space-y-10 text-white drop-shadow-lg z-20 font-medium"
                    : "hidden"
                    }`}>
                    <li>
                        <Link href={"/"}>Shop</Link>
                    </li>
                    <li>
                        <Link href={"/"}>More Info</Link>
                    </li>
                    <li>
                        <Link href={"/"}>FAQ</Link>
                    </li>
                    <li>
                        <Link href={"/"}>Contact</Link>
                    </li>
                </ul>
                <div className="flex gap-4 items-center text-dark ml-auto md:ml-0">
                    <div onClick={() => cartStore.toggleCart()}>
                        <BsCart4 size={20} />
                    </div>
                    <div>
                        <BsFillBagHeartFill size={20} />
                    </div>
                </div>

                <div className="md:hidden ml-4" onClick={mobeleMenuHandler}>
                    {openMobileMenu ? <MdClose size={25} /> : <FiMenu size={25} />}
                </div>
            </div>
            {!cartStore.isOpen && <Cart />}
        </nav>
    )
}

export default Navbar