import Item from "./Item"
function List (){
    return (
        <>
            <h1>minha lista</h1>
            <ol>
                <li>item</li>
                <li>item</li>
                <Item marca="camaro"/>
                <Item marca = "ferrari"/>
            </ol>
        </>
    )
}
export default List