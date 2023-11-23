function Pessoa({foto,profissao,nome,idade}){
return(
    <div>
        <img src={foto} alt={nome}/>
        <h2>nome: {nome}</h2>
        <p>idade{idade}</p>
        <p>profissão {profissao}</p>
    </div>
)
}
export default Pessoa