import { useState } from "react";
import { NavLink } from "react-router-dom";
import logoEcoStore from "../assets/ecoScore.png"

export default function Header() {
    return (
        <>
            <header className="flex flex-col text-white md:pl-28 md:pr-40 justify-between items-center md:flex-row">
                <div className="w-full md:w-auto flex justify-center items-center">
                    <img src={logoEcoStore} className="w-10/12 md:h-[110px] md:w-auto" />
                </div>
                <nav className="min-w-full md:min-w-0">
                    <ul className="flex gap-11 text-xl">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/Blog">Blog</NavLink></li>
                        <li><NavLink to="/contato">Contato</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}