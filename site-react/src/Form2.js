function Form2(){
    function entrar(e){
        e.preventDefault()
        console.log("Usuario Liberado")
    }
    return(
        <>
        <form onSubmit={entrar}>
            <div>
                <input type="text" placeholder="Digite seu nome"/>
            </div>
            <div>
                <input type="password" placeholder="Digite sua senha"/>
            </div>
            <div>
                <input type="submit" value="Entrar"/>
            </div>
        </form>
        </>
    )
}

export default Form2