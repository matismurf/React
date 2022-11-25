import React, {useState} from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    const [a, b] = [1, 2]
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const[fumante, setFumante] = useState(false)
    

    //nome idade fumante
    function fornecerInformacoes(nome, idade, fumante){
        setNome(nome)
        setIdade(idade)
        setFumante(fumante)
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