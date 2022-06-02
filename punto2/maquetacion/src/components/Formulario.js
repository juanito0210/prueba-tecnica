import React from "react";
import '../styles/Formulario.css'
import imagen4 from "../Images/Imagen4.png"
import imagen5 from "../Images/Imagen5.png"
import {FaUser} from 'react-icons/fa';
import {RiCellphoneFill} from 'react-icons/ri';
import {MdEmail} from 'react-icons/md';
import {IoIosLock} from 'react-icons/io';
import {TbShieldLock} from 'react-icons/tb';
import {BsGenderAmbiguous} from 'react-icons/bs';
import {ImLocation2} from 'react-icons/im';


function Formulario() {
    return (
        <div className="container-formulario">
            <div className="container-imagen5">
                <img src={imagen5} alt="imagen5" />
            </div>
            <div className="container-imagen4">
                <img src={imagen4} alt="imagen4" />
            </div>
            <div className="container-form">
                <div className="container-titulo">
                    <div className="titulo-formulario">
                        <h2>FORMULARIO DE REGISTRO</h2>
                    </div>
                </div>
                <div className="contenedor-input"><FaUser className="icon" /><input type="text" placeholder="Nombre"></input></div>
                <div className="contenedor-input"><FaUser className="icon" /><input type="text" placeholder="Apellido"></input></div>
                <div className="contenedor-input"><RiCellphoneFill className="icon" /><input type="number" placeholder="Celular"></input></div>
                <div className="contenedor-input"><MdEmail className="icon" /><input type="email" placeholder="Correo"></input></div>
                <div className="contenedor-input"><IoIosLock className="icon" /><input type="password" placeholder="Contraseña"></input></div>
                <div className="contenedor-input"><TbShieldLock className="icon" /><input type="password" placeholder="Confirmar contraseña"></input></div>
                <div className="genero-form"><BsGenderAmbiguous className="icon1" /> Genero </div>
                <p>M</p><input type="radio" name="genero"></input>
                <p>F</p><input type="radio" name="genero"></input>
                <div className="contenedor-input"><ImLocation2 className="icon" /><input type="text" placeholder="Ciudad"></input></div>
                <button className="ingreso">REGISTRAR</button>
            </div>
            <div className="container-preg">
            <p>¿Ya tienes una cuenta?</p>
            <a href="#-top">Inicia sesión</a>
            </div>
        </div>
    )
}
export default Formulario;