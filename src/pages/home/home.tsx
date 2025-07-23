import { Social } from "../../components/social/social"

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6"

export function Home(){
    return(
        <>
        <div className="w-full flex flex-col justify-center items-center py-4">
            <h1 className="md:text-4xl text-white text-3xl font-bold mt-20">
                My Links App
            </h1>
            <span className="text-green-50 mb-5 mt-4">
                👇 See all my links 👇
            </span>

            <main className="flex flex-col w-11/12 max-w-xl text-center">
                <section className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-x-105 cursor-pointer">
                    <a>
                        <p className="md:text-lg text-base">
                            LinkedIn
                        </p>
                    </a>
                </section>

                <section className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-x-105 cursor-pointer">
                    <a>
                        <p className="md:text-lg text-base">
                            Git Hub
                        </p>
                    </a>
                </section>

                <footer className="flex justify-center gap-3 my-4">
                    <Social url="https://www.linkedin.com/in/rui-nobre-martins-29217bba/">
                        <FaLinkedin size={35} color="#fff"  className="transition-transform hover:scale-y-105"/>
                    </Social>

                    <Social url="https://github.com/Rui-Nobre-Martins/">
                        <FaGithub size={35} color="#fff" className="transition-transform hover:scale-y-105"/>
                    </Social>

                    <Social url="https://www.instagram.com/ruinobremartins/">
                        <FaInstagram size={35} color="#fff" className="transition-transform hover:scale-y-105"/>
                    </Social>
                </footer>
            </main>
        </div>
        
        </>
    )
}