import { useState } from "react";
import { NavLink } from "react-router-dom";
import logoEcoStore from "../assets/ecoScore.png"

export default function Header() {
    return (
        <>
            <header className="flex text-white pl-28 pr-40 justify-between items-center">
                <div>
                    <img src={logoEcoStore} className="h-[110px]" />
                </div>
                <nav>
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