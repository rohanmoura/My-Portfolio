"use client"
import Image from "next/image"
import Link from "next/link"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { FaSquareXTwitter } from "react-icons/fa6"
export default function Footer() {
    let date = new Date();
    let year = date.getFullYear();

    return (
        <div className="bg-myprimecolor mt-10 pt-10 pb-5 lg:px-20 w-full ">
            <div className="flex flex-col lg:flex-row justify-between items-center">
                <div className="flex items-center mb-5 md:mb-0 text-center md:text-left gap-5">
                    <Image src={"images/logo.svg"} width={40} height={40} alt="logo" />
                    <div>
                        <h1 className="text-2xl">Rohan Moura</h1>
                        <p>Full Stack Web Developer</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row text-center gap-5 text-lg ">
                    <p className="underline" onClick={() => {
                        window.scrollTo(0, 0);
                    }}>Home</p>
                    <Link className="underline" href={"#about"}>About</Link>
                    <Link className="underline" href={"#projects"}>Projects</Link>
                    <Link className="underline" href={"#achievements"}>Achievements</Link>
                    <Link className="underline" href={"#contact"}>Contact</Link>
                </div>
                <div className="flex text-3xl lg:text-4xl gap-5 mt-5 lg:mt-0 items-center">

                    <Link className="hover:-translate-y-2 ease-in-out transition hover:scale-105" href={"https://www.linkedin.com/in/rohan-moura-66486527b/"}>
                        <AiFillLinkedin />
                    </Link>
                    <Link className="hover:-translate-y-2 ease-in-out transition hover:scale-105" href={"https://x.com/_rohanmoura_94"}>
                        <FaSquareXTwitter />
                    </Link>

                    <Link className="hover:-translate-y-2 ease-in-out transition hover:scale-105" href={"https://github.com/rohanmoura"}>
                        <AiFillGithub />
                    </Link>
                </div>

            </div>
            <p className="text-center text-base lg:text-lg mt-5">Rohan Moura  &copy; copyright {year}</p>
        </div>
    )
}