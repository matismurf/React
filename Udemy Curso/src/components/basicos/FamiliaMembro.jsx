import React from 'react'

export default (props) => {
    
    return(
        <div>
            {props.nome} <strong>{props.sobrenome || 'Silva'}</strong>
        </div>
    )
}