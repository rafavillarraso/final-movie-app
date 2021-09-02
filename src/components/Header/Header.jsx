import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom'; 


const Header = props =>{
    return (<header>
        <NavLink to='/popular'>
            <span className="popular">Peliculas populares</span>
        </NavLink>

        <NavLink to='/now_playing'>
            <span className="now_playing">Hoy en cartelera</span>
        </NavLink>

        <NavLink to='/upcoming'>
            <span className="upcoming">Próximos estrenos</span>
        </NavLink>

        <NavLink to='/top_rated'>
            <span className="top_rated">Peliculas más votadas</span>
        </NavLink>
        <div className='buscar'><input type="text" placeholder="buscar..." /></div>
       
    </header>)
}

export default Header;