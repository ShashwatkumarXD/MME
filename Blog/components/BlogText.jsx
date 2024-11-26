import React from 'react';
import styles from '../stylesheets/blogText.module.css'

function BlogText(props) {
    return (
        <div className={styles.blogText}>
            <br/>
            <div>{props.text}</div>

        </div>
    );
}

export default BlogText;
