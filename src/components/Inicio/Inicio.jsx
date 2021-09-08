import React from 'react';
import '../Inicio/Inicio.scss';
import { Link } from 'react-router-dom';
import animation from '../../chatbot_bw.svg';


const Inicio = () => {
    return (
        <><div className='fondo' >
            <div className="col-6">
                <div className='inicio'>
                    <h1>Filtra películas con el menú superior o con el formulario de búsqueda</h1>
                    <p>Bienvenido a la app de búsqueda de pelis. Esta web app ha sido realizada con las tecnologías de React, React-router, React-redux y formateada con Bootstrap y Sass</p>
                    <p>Por qué no empezar por ver lo que hay hoy en cartelera:</p>
                    <Link to='/now_playing'><button type="button" class="btn btn-dark"> Ahora en cartelera </button></Link>
                </div>
                </div>
            <div className="col-6">
            <div>
            <img src={animation} />
            </div>
            </div>
        </div>
        
        </>
    );
};

export default Inicio;