function Events({numero}){
    function clicar(){
        console.log(`Clicou no ${numero}`)
    }
    return(
        <div>
            <h1>Clique para um evento:</h1>
            <button onClick={clicar}>Clicar</button>
        </div>
    )
}

export default Events