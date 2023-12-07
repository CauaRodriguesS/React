function Evento(){
    function MeuEvento({numero}){
        console.log(`o botão  foi ativado ${numero}`)
    }

    
    return(
        <>
        <p>Clique para disparar um evento</p>
        <button onClick={MeuEvento}>Ativar!</button>
        </>
    )
}
export default Evento