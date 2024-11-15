import logo from "../assets/ecoScore.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faInstagram, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer>
            <div className="bg-[#04253D] flex flex-row py-10 justify-center">
                <div className="w-3/12 flex justify-center items-center">
                    <p className="text-white text-xl text-center font-mono">Inovação e tecnologia </p>
                </div>
                <div className="w-4/12 flex justify-center items-center">
                    <img src={logo} className="h-[100px]" />
                </div>
                <div className="w-3/12 flex gap-7 justify-center items-center">
                    <FontAwesomeIcon icon={faInstagram} className="text-white text-[35px]" />
                    <FontAwesomeIcon icon={faFacebook} className="text-white text-[35px]" />
                    <FontAwesomeIcon icon={faWhatsapp} className="text-white text-[35px]" />
                </div>
            </div>
        </footer>
    )
}