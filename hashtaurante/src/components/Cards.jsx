import { pratosPrincipais, sobremesas, bebidas } from '../assets/cardapio.js'
import Card from './Card'

const Cards = ({numCategoriaSelecionada}) => {
    const itensCategoria = [pratosPrincipais, sobremesas, bebidas]

    const categoriaSelecionada = itensCategoria[numCategoriaSelecionada]

    return (
        <div className="cards">
            {categoriaSelecionada.map((item) => (
                <Card
                    titulo={item.nome}
                    descricao={item.descricao}
                    preco={item.preco}
                    imagem={item.imagem}
                />
            ))}          
        </div>
  )
}

export default Cards

/* 
Quando é exportado como default (padrão), ele é importado sem   chaves (ex: import Card from './Card')

Quando há mais de uma exportação é necessario usar chaves com o nome das variaveis (ex: import { pratosPrincipais, sobremesas, bebidas })
*/