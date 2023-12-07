function Form(){
function cadastrar(e){
    e.preventDefault()
    console.log("cadastrou")

}
    return (
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrar}>
                <div>
                    <input type="text"placeholder="digite seu nome"/>
                    <input type="submit" value="cadastrar" />
                </div>
            </form>
        </div>
    )
}
export default Form