import React from 'react'
import Descrip from './Descrip'
import ImagenesOfertas from './ImagenesOfertas'

const DescripContent = () => {
    return (
        <div>
            <div className='ofertas'>
                <ImagenesOfertas />
                <Descrip />
            </div>
        </div>
      )
}

export default DescripContent
