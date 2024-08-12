import Image from "next/image"
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { GradientShadowButton } from "@/components/hover.me/button"
import { useRouter } from "next/navigation";
export default function Section() {
    const router = useRouter()
    const handleclick = () => {
        router.push("/contact")
    }
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                            <Image className="w-40" src="/svg/undraw_visual_data_re_mxxo.svg" alt="Description" width={100} height={100}></Image>
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Transform Your Food Business with AI</h2>
                            <p className="leading-relaxed text-base">Keybolt is revolutionizing the food industry by making advanced AI tools accessible to all. Our platform helps businesses streamline operations, optimize inventory, and make data-driven decisions that boost efficiency and profitability. With Keybolt, even the smallest local shops can leverage cutting-edge technology to thrive in a competitive market..</p>
                            {/* <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a> */}
                        </div>
                    </div>
                    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Smarter Operations, Stronger Growth</h2>
                            <p className="leading-relaxed text-base">At Keybolt, we understand that running a food business is demanding. That’s why we’ve created a digital assistant that sits in your pocket, helping you manage your most critical tasks effortlessly. From automated ordering to real-time sales monitoring, Keybolt ensures your operations run smoothly, giving you more time to grow your business..</p>
                            {/* <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a> */}
                        </div>
                        <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                        <Image className="w-40" src="/svg/undraw_start_building_re_xani (1).svg" alt="Description" width={100} height={100}></Image>
                        </div>
                    </div>
                    <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
                        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                        <Image className="w-40" src="/svg/undraw_cooking_p7m1 (1).svg" alt="Description" width={100} height={100}></Image>
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2"> Empowering Local Entrepreneurs</h2>
                            <p className="leading-relaxed text-base">We believe in the power of local businesses to create vibrant communities. Keybolt is designed to empower mom-and-pop shops, local chains, and independent eateries with the tools they need to succeed. Our easy-to-use platform simplifies complex tasks, so you can focus on what you do best—serving your customers..</p>
                            {/* <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a> */}
                        </div>
                    </div>
                    <div className="flex justify-center items-center py-6 my-8">
                        <GradientShadowButton onClick={handleclick} />
                    </div>




                </div>
            </section></>
    )
}