import styles from './Post.module.css'

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/matismurf.png" />
                    <div className={styles.authorInfo}>
                        <strong>Matias Vinícius</strong>
                        <span>Imperador do Brasil</span>
                    </div>
                </div>
                <time tittle="1 de Dezembro ás 08:13h" dateTime="2022-12-01 08:13:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera</p>
                <p>Este é um projeto react e eu estou digitando coisas aleatórias para colocar nesse parágrafo</p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Deixe um comentário">
                    
                </textarea>

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
        </article>
    )
}