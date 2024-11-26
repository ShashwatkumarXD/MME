import React from 'react';
import styles from '../stylesheets/blogDate.module.css'

function BlogDate(props) {
    const currentDate = new Date();

    const date = props.date || currentDate.getDate();
    const month = props.month || currentDate.toLocaleString('default', { month: 'long' });
    const year = props.year || currentDate.getFullYear();

    return (
        <div className={styles.blogDate}>
            {`${date} ${month}, ${year}`}
        </div>
    );
}

export default BlogDate;
