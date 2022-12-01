import styles from './Sidebar.module.css'
import {PencilLine } from 'phosphor-react'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1512641406448-6574e777bec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" 
            />
        
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/matismurf.png" />
                <strong>Matias Vinícius</strong>
                <span>Imperador do Brasil</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    )
}