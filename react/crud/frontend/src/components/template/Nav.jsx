import './Nav.css'
import React from 'react'
import NavItem from './NavItem'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem icon="home" url="" title="Início"/>            
            <NavItem icon="users" url="/users" title="Usuários"/>            
        </nav>
    </aside>