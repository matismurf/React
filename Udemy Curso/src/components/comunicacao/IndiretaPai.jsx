import React from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    let nome = '?'
    let idade = 0
    let fumante = false

    //nome idade fumante
    function fornecerInformacoes(nomeParam, idadeParam, fumanteParam){
        nome = nomeParam
        idade = idadeParam
        fumante = fumanteParam
    }

    return(
        <div>
            <div>
                <span>{nome} </span>
                <span>{idade} </span>
                <span>{fumante? 'é Fumante' : 'não é Fumante'} </span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}/>
        </div>
    )
}