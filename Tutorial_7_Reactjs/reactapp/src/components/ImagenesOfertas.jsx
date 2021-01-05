import React from 'react'
import data from '../data/datos.json'
import {useParams} from 'react-router-dom'
import { Card,Image } from 'semantic-ui-react'

let mydata = JSON.parse(JSON.stringify(data));
let COLORS = ['red','orange','yellow','olive','green','teal','blue','violet','purple','pink','brown','grey','black']

const Descrip = () => {

    const {id} = useParams();
    let Oferta1, Oferta2,Oferta3,Oferta4;
    mydata.map( x => {
        if (x.id === id) {
            Oferta1 = x.imgs.oferta1;
            Oferta2= x.imgs.oferta2;
            Oferta3 = x.imgs.oferta3;
            Oferta4 = x.imgs.oferta4;
        }
        return false;
    }
    )

    return (
        <div className="ofertas-Cards">
            <Card className="dsc-Cards__card" color={ COLORS[ (Math.floor(Math.random()*(COLORS.length)))] }>
                <Image src={Oferta1} wrapped ui={false} />
            </Card>
            <Card className="dsc-Cards__card" color={ COLORS[ (Math.floor(Math.random()*(COLORS.length)))] }>
                <Image src={Oferta2} wrapped ui={false} />
            </Card>
            <Card className="dsc-Cards__card" color={ COLORS[ (Math.floor(Math.random()*(COLORS.length)))] }>
                <Image src={Oferta3} wrapped ui={false} />
            </Card>
            <Card className="dsc-Cards__card" color={ COLORS[ (Math.floor(Math.random()*(COLORS.length)))] }>
                <Image src={Oferta4} wrapped ui={false} />
            </Card>
        </div>
    )
}

export default Descrip
