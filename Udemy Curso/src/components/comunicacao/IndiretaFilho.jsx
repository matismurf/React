import React from 'react'

export default props => {
    
    return(
        <div>
            <div>
                Filho
            </div>
            <button onClick={
                function(e) {
                    props.quandoClicar('João', 42, true)
                }
            }>
                Fornecer Informações</button>
        </div>
    )
}