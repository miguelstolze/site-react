import PropTypes from 'prop-types'
/*PropTypes é uma validação a nivel de progamação
caso alguem venha dar manutenção no codigo serve para garantir o bom
funcionamento do app*/

function Item({marca, anoLancamento}){
    return(
        <>
        <li>{marca} - {anoLancamento}</li>
        </>
    )
}

Item.propTypes = {
  marca: PropTypes.string.isRequired,
  anoLancamento: PropTypes.number,   
}

Item.defaultProps = {
  marca: "Faltou a marca",
  anoLancamento: 0,
}

export default Item