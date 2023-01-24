import styles from './Avatar.module.css';

export function Avatar({imageUrl, hasBorder = true}) {
    return(
        <div>
            <img 
                className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
                src={imageUrl} 
            />
        </div>
    )
}