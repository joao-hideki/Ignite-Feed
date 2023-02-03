import styles from './Post.module.css';
import { format, formatDistanceToNow } from 'date-fns';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import ptBr from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Content {
    type: string;
    content: string;
}

interface PostProps {
    author: {
        name: string;
        role: string;
        avatarUrl: string;
    };
    content: Content[];
    publishedAt: Date;
}

export function Post({author, content, publishedAt}: PostProps) {
    const [comments, setComments] = useState<string[]>([]);
    const [newComment, setNewComment] = useState('');

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBr  
    });
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true
    });

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();
        setComments([...comments, newComment]);
        setNewComment('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewComment(event.target.value);
        event.target.setCustomValidity('');
    }
    
    function handleInvalidNewComment(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Preenchimento obrigatório!');
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(
            (comment) => comment !== commentToDelete
        );
        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newComment.length === 0;
    
    return( 
        <article className={styles.post}>  
            <header>
                <div className={styles.author}>
                    <Avatar 
                        src={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time 
                    title={publishedDateFormatted}
                    dateTime={publishedAt.toISOString()}
                >{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map((line) => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href='#'>{line.content}</a></p>
                    }
                })}
            </div>

            <form 
                className={styles.commentForm}
                onSubmit={handleCreateNewComment}
            >
                <strong>Deixe seu feedback</strong>
                <textarea 
                    name='comment' 
                    placeholder='Deixe um comentário' 
                    value={newComment}
                    onChange={handleNewCommentChange}
                    required
                    onInvalid={handleInvalidNewComment}
                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment) => (
                    <Comment 
                        key={comment}
                        content={comment} 
                        onDeleteComment={deleteComment}
                    />
                ))}
            </div>
        </article>
    )
}