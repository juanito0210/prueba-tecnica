import React from "react";
import '../styles/Inicio.css';
import imagen1 from '../Images/Imagen1.png'
import imagen2 from '../Images/Imagen2.png'
import imagen3 from '../Images/imagen3.png'


function Inicio() {
    return (
        <div className="contenedor">
            <div className="imagen1">
                <img src={imagen1} alt="imagen1" />
            </div>
            <div className="contenedor-imagen2">
                <img className="imagen2" src={imagen2} alt="imagen2" />
            </div>
            <div className="fondo-verde">
                <div className="fondo-morado">
                    <h1>Bienvenidos</h1>
                    <h2>a la Feria Virtual</h2>
                </div>
                <div className="parrafo">
                    <h3>Registrate para vivir la experiencia virtual.</h3>
                </div>
                <div className="contenedor-decoracion">
                    <button className="boton-ingresar">Registrarme</button>
                    <div className="contenedor-final">
                        <div className="punto"></div>
                        <div className="linea"></div>
                        <div className="contenedor-imagen3">
                            <img className="imagen3" src={imagen3} alt="imagen3" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Inicio;