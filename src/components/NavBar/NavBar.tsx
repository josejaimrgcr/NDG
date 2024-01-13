import React from 'react';
// Importamos el Link para la navegación
import { Link } from "react-router-dom";
import facebook from "../../icons/facebook.ico"
import x from "../../icons/x.ico"
import instagram from "../../icons/instagram.ico"
import whatsapp from "../../icons/whatsapp.ico"

const NavBar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary px-5">
            <div className="d-flex flex-wrap justify-content-between align-items-center w-100">
                <Link to={"/"} className='navbar-brand link_navbar'>
                    <p className='display-6 fw-bold'>NDG</p>
                </Link>

                <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
                    <li className='ms-3'>
                        <a href="#">
                            <img src={facebook} width={35} alt="" />
                        </a>
                    </li>
                    <li className='ms-3'>
                        <a href="#">
                            <img src={instagram} width={35} alt="" />
                        </a>
                    </li>
                    <li className='ms-3'>
                        <a href="#">
                            <img src={x} width={35} alt="" />
                        </a>
                    </li>
                    <li className='ms-3'>
                        <a href="#">
                            <img src={whatsapp} width={35} alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;