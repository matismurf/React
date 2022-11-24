import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return(
        <div>
            <DiretaFilho nome="Washington" idade={25} fuma={true} />
            <DiretaFilho nome="Marcos" idade={15} fuma={false}/>
        </div>
    )
}