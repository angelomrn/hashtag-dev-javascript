import './App.css'
import Categorias from './components/categorias'
import Cards from './components/Cards'
import Banner from './components/Banner'
import { useState } from "react"

function App() {

  // Hook que cria uma variavel de estado  
  const [numCategoriaSelecionada, setNumCategoriaSelecionada]= useState(0)
  
  return (
    <div className="container">

      <Banner/>  {/*Self Closing Tag*/}
      <Categorias 
        numCategoriaSelecionada={numCategoriaSelecionada}
        setNumCategoriaSelecionada={setNumCategoriaSelecionada}
      />
      
      <Cards numCategoriaSelecionada={numCategoriaSelecionada} />
      
    </div>
  )
}

export default App
// rfce: React Function Component Export