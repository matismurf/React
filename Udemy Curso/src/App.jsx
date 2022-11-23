import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import './App.css'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaRepeticao'

export default () => {
    return(
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card titulo="#07-Desafio Repetição" color="#e2d810">
                    <TabelaProdutos></TabelaProdutos>
                </Card>

                <Card titulo="#06-Repeticao" color="#5c3c92">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="#05-Componente com filhos" color="#077b8a">
                    <Familia sobrenome="Ferreira">
                        <FamiliaMembro nome="Maria" ></FamiliaMembro>
                        <FamiliaMembro nome="Julia"></FamiliaMembro>
                    </Familia>
                </Card>

                <Card titulo="#04-Desafio Aleatório" color="#e52165">
                    <Aleatorio min={1} max={60}/>
                </Card>

                <Card titulo="#03-Fragmento" color="#0d1137">
                    <Fragmento />
                </Card>

                <Card titulo="#02-Com Parâmetro" color="#d72631">
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

                <Card titulo="#01-Primeiro Componente" color="#a2d5c6">
                    <Primeiro></Primeiro>
                </Card>
            </div>

            
        </div>
    )
}