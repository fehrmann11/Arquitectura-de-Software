import React from 'react'
import etiqueta from '../img/2.png'
import cartel from '../img/3.png'
import { Image } from 'semantic-ui-react'
import {useHistory} from 'react-router-dom'

const Headerr = () => {
  const history = useHistory();
  return (
    <header className="dsc-header">

      <div className="dsc-header__brand">
        <h1  onClick={() => history.push("/")} className="dsc-header__brand-h1"> Cyber <span onClick={() => history.push("/")} className="dsc-header__brand-h1__span">Valdivia</span> </h1>
        <h2  onClick={() => history.push("/")} className="dsc-header__brand-h2"> Apoya el emprendimiento local </h2>
      </div>

      <div className="dsc-header__imagenes">
        <Image className="dsc-header__imagenes-1" size='small' src={etiqueta}/>
        <Image className="dsc-header__imagenes-2" size='small' src={cartel} />
      </div>

    </header>
)
}

export default Headerr
