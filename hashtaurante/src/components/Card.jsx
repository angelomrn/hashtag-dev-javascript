const Card = ({titulo, descricao, preco, imagem}) => {
  return (
    <div className="card">
        <div className="card__textos">
            <h2 className="card__titulo">{titulo}</h2>
            
            <p>{descricao}</p>

            <p className="card__preco">{preco}</p>
        </div>

        <div className="card__img">
            <img src={imagem} alt="Foto do Produto" />
        </div>
    </div>
  )
}

export default Card

// 'props' pode ser usado como parametro tambem (ex: props.titulo, props.descricao e etc)
// mas no codigo usamos destruturação: ({titulo, descricao, ...})