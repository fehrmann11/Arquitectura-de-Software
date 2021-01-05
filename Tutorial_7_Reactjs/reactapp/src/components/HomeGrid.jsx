import React,{ useState } from 'react'
import MainContainer from './MainContainer'
import MainContent from './MainContent'
import Footer from './Footer'
import Headerr from './Headerr'
import Cards from './Cards'

const HomeGrid = () => {
  const [Category, setCategory] = useState(0);
  const seleccionacategory = id =>{
    setCategory(id)
  }

  return (
    <MainContainer>
        <Headerr />
        <MainContent>
            <Cards funcion={seleccionacategory} category={Category}/>
        </MainContent>
        <Footer />
    </MainContainer>
  )
}

export default HomeGrid
