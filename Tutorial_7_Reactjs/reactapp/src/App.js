import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from "react-router-dom";
import "./assets/scss/layout.scss"
import "./assets/scss/ofertas.scss"
import "./assets/scss/categorizador.scss"
import HomeGrid from './components/HomeGrid'
import Ofertas from './components/Ofertas'

class App extends Component{

  render(){
    return (
      <Router>
          <div>
            <Route path='/:id' component={Ofertas} />
            <Route exact path='/' component={HomeGrid} /> 
          </div>
      </Router>
  );}
}

export default App;
//<Route path='/#:category' component={HomeGrid} />