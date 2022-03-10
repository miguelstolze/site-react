function Form(){

    function cdt_user(e){
        e.preventDefault()
        console.log("cadastrou")
    }
    return(
        <>
        <h1>My Form</h1>
        <form onSubmit={cdt_user}>
            <div>
                <input type="text" placeholder="Digite seu nome"/>
                <input type="submit" value="Cadastar"/>
            </div>
        </form>
        </>
    )
}

export default Form