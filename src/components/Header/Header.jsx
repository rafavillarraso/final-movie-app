import React from 'react';

const Header = props =>{
    return (<header className='containerFluid, col6'>
        <span className="populares">Peliculas populares</span>
        <span className="cartelera">Hoy en cartelera</span>
        <span className="estrenos">Próximos estrenos</span>
        <span className="votadas">Peliculas más votadas</span>
    </header>)
}

export default Header;