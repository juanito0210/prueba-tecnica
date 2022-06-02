import React from 'react'
import Upload from './Upload'
import ListImage from './Listimage'

const UploadContainer = () => {
    return (
        <>
            <div className='container mt-3'>
                <div className='col'>
                    <div className='col-md-12 title'>
                        <ListImage />

                    </div>
                    <div className='col-md-12 contenido'>
                        <Upload />
                    </div>
                </div>
            </div>
        </>
    )
}

export default UploadContainer 