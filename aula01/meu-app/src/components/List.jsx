import Item from "./Item"
function List (){
    return (
        <>
            <h1>minha lista</h1>
            <ol>
                <li>item</li>
                <li>item</li>
                <Item marca="camaro" ano_lancamento={2000}/>
                <Item marca = "ferrari" ano_lancamento={1900}/>
                <Item marca="biz" ano_lancamento={1991}/>
            </ol>
        </>
    )
}
export default List