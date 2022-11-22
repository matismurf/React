import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import './App.css'

export default () => {
    return(
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card titulo="#04-Desafio Aleatório">
                    <Aleatorio min={1} max={60}/>
                </Card>

                <Card titulo="#03-Fragmento">
                    <Fragmento />
                </Card>

                <Card titulo="#02-Com Parâmetro">
                    <ComParametro 
                        titulo="Situação do Aluno" 
                        aluno="Pedro"
                        nota={9.3}
                    />
                    <ComParametro 
                        titulo="Situação do Aluno" 
                        aluno="Maria"
                        nota={5.2}
                    />
                </Card>

                <Card titulo="#01-Primeiro Componente">
                    <Primeiro></Primeiro>
                </Card>
            </div>

            
        </div>
    )
}