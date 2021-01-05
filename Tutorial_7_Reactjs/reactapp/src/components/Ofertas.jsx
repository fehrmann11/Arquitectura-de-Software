import React,{ Component } from 'react'
import MainContainer from './MainContainer'
import MainContent from './MainContent'
import Footer from './Footer'
import Headerr from './Headerr'
import DescripContent from './DescripContent'

export default class Ofertas extends Component{
  render() {
    return (
        <MainContainer>
            <Headerr />
            <MainContent>
                <DescripContent />
            </MainContent>
            <Footer />
        </MainContainer>
      )
  }
}