import styles from './ola.module.css'

// criando componentes e adicionando css diretamente

function HelloWorld(){
    return(
        <div className={styles.ola}>
            <h1>
                Olá React
            </h1>
        </div>
    )
}

export default HelloWorld