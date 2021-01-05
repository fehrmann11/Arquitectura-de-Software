import React from 'react'
import data from '../data/datos.json'
import {useParams} from 'react-router-dom'
import { Card, Icon, Image,Button } from 'semantic-ui-react'

let mydata = JSON.parse(JSON.stringify(data));

const Descrip = () => {
    const {id} = useParams();
    let Perfil,Nombre, Mensaje,Fono,Facebook,Instagram;
    mydata.map( x => {
        if (x.id === id) {
             Perfil=x.imgs.perfil;
             Nombre = x.nombre;
             Mensaje= x.mensaje;
             Fono = x.fono;
             Facebook = x.facebook;
             Instagram = x.instagram;
        }
        return true;
    }
    )

    return (
        <div className="ofertas-Cards">
            <Card className="ofertas-Cards__card">
                <Image className="ofertas-Cards__img" src={Perfil} wrapped ui={false} />
                <Card.Content >
                    <Card.Header style={{marginTop:"5%"}}>{Nombre}</Card.Header>
                    <Card.Meta>
                    <Icon name='whatsapp' />
                        <span className='date'>{Fono}</span>
                    </Card.Meta>
                    <hr></hr>
                    <Card.Description>
                        {Mensaje}
                    </Card.Description>
                </Card.Content>
                <hr/>
                <Card.Content extra>
                    {Facebook === "" && <div></div>}
                    {Facebook !== "" && <a className="dsc-footer__a"  target="_blank" href={Facebook}>
                                            <Button circular color='facebook'>
                                                <Icon name='facebook' />Facebook
                                            </Button>
                                        </a>}
                    {Instagram === "" &&   <div></div>}
                    {Instagram !== "" && <a className="dsc-footer__a"  target="_blank" href={Instagram}>
                                            <Button circular color='instagram'>
                                                <Icon name='instagram' />Instagram
                                            </Button>
                                        </a>}
                </Card.Content>
             </Card>
        </div>
    )
}

export default Descrip
