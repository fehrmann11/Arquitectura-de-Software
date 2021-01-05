import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

export default class Detail extends Component{
  render() {
    return(
      <div className="detail-desplegable">
        <Icon inverted name='chevron circle down' className='abajo' size='large' />
        <div className="detail-Links">
          <a href="www.google.com">Ver Perfil</a>
          <a href="www.google.com">Cerrar sesión</a>
        </div>
      </div>
      
      )
    }
  }