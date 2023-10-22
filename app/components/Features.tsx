import moonlamp from "@/public/transparentmoonlamp.png"
import Image from "next/image"
import { BsBatteryCharging } from "react-icons/bs"

const Features = () => {
    return (
        <section className="py-5">
            <div className="w-[89%] m-auto max-w-[1400px] grid md:grid-cols-3 grid-cols-1 items-center justify-items-center gap-5">
                <div>
                    <ul className="space-y-10">
                        <li>
                            <div className="flex gap-2 items-center text-xl font-bold text-dark">
                                <h3>Battery life</h3>
                                <div>
                                    <BsBatteryCharging />
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <div className="flex gap-2 items-center text-xl font-bold text-dark">
                                <h3>Battery life</h3>
                                <div>
                                    <BsBatteryCharging />
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <div className="flex gap-2 items-center text-xl font-bold text-dark">
                                <h3>Battery life</h3>
                                <div>
                                    <BsBatteryCharging />
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center items-center">
                    <Image src={moonlamp} width={500} height={500} alt="moonlamp" />
                </div>
                <div>
                    <ul className="space-y-10 text-right">
                        <li>
                            <div className="flex gap-2 items-center text-xl font-bold text-dark justify-end">
                                <h3>Battery life</h3>
                                <div>
                                    <BsBatteryCharging />
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <div className="flex gap-2 items-center text-xl font-bold text-dark justify-end">
                                <h3>Battery life</h3>
                                <div>
                                    <BsBatteryCharging />
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <div className="flex gap-2 items-center text-xl font-bold text-dark justify-end">
                                <h3>Battery life</h3>
                                <div>
                                    <BsBatteryCharging />
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Features