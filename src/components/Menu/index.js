import React from 'react';
import Logo from '../../assets/imgs/logo_azul.png'
import ButtonLink from './components/ButtonLink';
import "./Menu.css"

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} className="Logo" alt="devFlix logo" />
            </a>

            <ButtonLink className="ButtonLink" href="/">
                Novo vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;