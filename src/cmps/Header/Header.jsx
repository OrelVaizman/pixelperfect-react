
import React from 'react'

import './Header.scss'
import Menu from '../Menu/Menu';
import LogoSvg from '../../assets/imgs/desktop/logo.svg'

const Header = (props) => {

    return (
        <header className="header">
            <div className="main-header container flex center-center">
                <Logo />
                <Menu />
            </div>
        </header>
    )


}

export default Header
const Logo = () => {
    return (
        <div className="logo">
            <img src={LogoSvg} alt="Creative"/>
        </div>
    )
}