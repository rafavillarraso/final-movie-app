import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';


const Header = props =>{
    return (<header>
        <NavLink to='/popular'>
            <span className="popular">Peliculas populares</span>
        </NavLink>

        <NavLink to='/cartelera'>
            <span className="cartelera">Hoy en cartelera</span>
        </NavLink>

        <NavLink to='/upcoming'>
            <span className="upcoming">Próximos estrenos</span>
        </NavLink>

        <NavLink to='/top_rated'>
            <span className="top_rated">Peliculas más votadas</span>
        </NavLink>
       
    </header>)
}

export default Header;