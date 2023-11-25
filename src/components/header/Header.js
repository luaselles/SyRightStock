import React from 'react'
import logo from '../../imagens/logo.png'
import Menu from '../menu'

import './Header.css'

const Header = () => (
    <header className="app-header">
        <div className="app-header__logo">
            <img src={logo} width={100} height={40} />
        </div>
        <Menu />
    </header>
)

export default Header