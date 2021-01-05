import React from 'react'
import { Card, Image} from 'semantic-ui-react'
import data from '../data/datos.json'
import {Link} from 'react-router-dom'
import Categorizador from './Categorizador'

let mydata = JSON.parse(JSON.stringify(data));
let COLORS = ['red','orange','yellow','olive','green','teal','blue','violet','purple','pink','brown','grey','black']


function Cards(props) {
  let category = (props.category)
  let datafilter = mydata.filter(x => x.categoria === `${category}`)
  if (category===0) {
    datafilter = mydata
  }
  return (
    <div>
      <Categorizador handleClick={props.funcion}/>
      <div className="dsc-Cards">
        { 
          datafilter.map( x => (
              <Link to={`/${x.id}`} key={x.id}>
                  <Card className="dsc-Cards__card" color={ COLORS[ (Math.floor(Math.random()*(COLORS.length)))] }>
                    <Image src={x.imgs.logo} wrapped ui={false} />
                  </Card>
              </Link>
          ))
        }
     </div>
    </div>
)
}

export default Cards
