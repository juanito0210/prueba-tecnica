import React, { useState } from 'react'
import UploadService from '../services/upload.service'
import '../assets/styles/Upload.css'


const Upload =() => {

    const [ name, setName ] = useState("")
    const [ file, setFile ] = useState()
    const [ pathImage, setPathImage ] = useState("http://localhost:4000/upload.png")
    
    const sendImage = (e) => {
        e.preventDefault()
        UploadService.sendImages(name, file).then((result) => {
            console.log("el resultado es : ", result)
        })
    }

    const onFileChange = (e) => {
        if(e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0]
            if(file.type.includes("image")) {
                const reader = new FileReader()
                reader.readAsDataURL(file)

                reader.onload = function load() {
                    setPathImage(reader.result)
                }

                setFile(file)
            }else {
                console.log("there was an error")
            }
        }
    }
    
    return(
        <form>
            <div className="input-file">
                <input 
                   type="file"
                   placeholder="File"
                   onChange= {onFileChange}
                />
                <img className="img-fluid img-thumbnail image" src={pathImage} alt="hola"/>
            </div>
            <input 
            type="text"
            placeholder="Ingrese el nombre de la imagen"
            className= "name-picture mt-2"
            onChange={(e) => setName(e.target.value)}
            />
            <br />

            <button type="submit" className="btn boton-enviar" onClick={sendImage}>
                Enviar Imagen
            </button>
        </form>
    )
}

export default Upload