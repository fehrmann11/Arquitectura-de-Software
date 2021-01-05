import React, {Component} from 'react';

class Principal extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            img: '#'
        }
    }

    //inicializar estado
    state ={
        data: {},
    };


    //iniciar llamada a la api
    async componentDidMount(){
        await this.laApi()
    

    }

    laApi = async () => {
        let res = await fetch('https://pokeapi.co/api/v2/pokemon')
        let data = await res.json()

        console.log(data)
    }

    render(){
        return(
            <div>{this.state.data.map(pok =>{
                return (<li>{pok.results}</li>)
            })}</div>
        )
    }
}
export default Principal;