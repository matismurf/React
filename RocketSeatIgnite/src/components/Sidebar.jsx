import styles from './Sidebar.module.css'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1512641406448-6574e777bec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" 
            />
        
            <div className={styles.profile}>
                <strong>Matias Vinícius</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    )
}