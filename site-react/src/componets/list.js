import Item from "./item"

function List(){
    return(
        <>
        <h1>Minha Lista</h1>
        <ul>
           <Item marca="Ferrari" anoLancamento={1994}/>
           <Item marca="Fiat" anoLancamento={1999}/>
           <Item marca="Renault" anoLancamento={2000}/>
           <Item marca="Chevrolet" anoLancamento={2022}/>
           <Item/>
        </ul>
        </>
    )
}

export default List