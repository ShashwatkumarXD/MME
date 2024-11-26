import React from 'react'
import styles from '../stylesheets/blogTitle.module.css'

function BlogTitle(props) {
    return <div className={styles.blogTitle}>
        {`${props.title}`}
        <hr></hr>
    </div>;
}

export default BlogTitle;