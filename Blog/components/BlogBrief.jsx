import React from 'react';
import styles from '../stylesheets/blogBrief.module.css'

function BlogBrief(props) {
    return (
        <div className={styles.blogBrief}>
            {`${props.brief}`}
        </div>
    );
}

export default BlogBrief;
