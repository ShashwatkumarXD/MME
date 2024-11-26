import React from 'react'
import styles from '../stylesheets/blogSubtitle.module.css'

function BlogSubtitle(props) {
    return <div className={styles.blogSubtitle}>
        <br/>
        {`${props.subtitle}`}
    </div>;
}

export default BlogSubtitle;