import React from 'react'

export default props => {
    const cb = props.quandoClicar
    const gerarIdade = () => parseInt(Math.random() * (20)) + 50
    const gerarFumante = () => Math.random() > 0.5 ? true : false

    return(
        <div>
            <div>
                Filho
            </div>
            <button onClick={_ => cb('João',gerarIdade(),gerarFumante())}>
                Fornecer Informações</button>
        </div>
    )
}