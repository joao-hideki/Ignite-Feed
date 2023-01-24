import styles from './Post.module.css';

export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://gcavocats.ca/wp-content/uploads/2018/09/man-avatar-icon-flat-vector-19152370-1.jpg"/>
                    <div className={styles.authorInfo}>
                        <strong>Username</strong>
                        <span>Profession</span>
                    </div>
                </div>
                <time 
                    title='21 de janeiro às 08:00h'
                    dateTime='2023-21-01 08:00:00'
                >Publicado há 1 hora</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>
                    Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
                </p>
                <p><a href=''>jane.design/doctorcare</a></p>
                <p>
                    <a href=''>#novoprojeto</a>{' '}
                    <a href=''>#nlw</a>{' '} 
                    <a href=''>#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário' />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
        </article>
    )
}