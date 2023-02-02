import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({content, onDeleteComment}) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((prevState) => prevState + 1);
    }

    return(
        <div className={styles.comment}>
            <Avatar
                hasBorder={false} 
                imageUrl='https://gcavocats.ca/wp-content/uploads/2018/09/man-avatar-icon-flat-vector-19152370-1.jpg'
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Author</strong>
                            <time 
                                title='21 de janeiro às 08:00h'
                                dateTime='2023-21-01 08:00:00'
                            >Cerca de 1h atrás</time>
                        </div>

                        <button 
                            title='Deletar comentário'
                            onClick={handleDeleteComment}
                        >
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20} />
                        Gostei <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}