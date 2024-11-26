import React from 'react'
import styles from '../stylesheets/blogSubsubtitle.module.css'

function BlogSubsubtitle({subsubtitle}) {
    return <div className={styles.blogSubsubtitle}>
        <br/>
        {subsubtitle}
    </div>;
}

export default BlogSubsubtitle;