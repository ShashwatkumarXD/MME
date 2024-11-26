
// import React from 'react';
// import styles from '../stylesheets/blogList.module.css';

// function BlogList(props) {
//     const { items, ordered = false } = props; // Use `ordered` to toggle between ordered and unordered lists.

//     const renderList = (list) => {
//         return list.map((item, index) => {
//             if (Array.isArray(item)) {
//                 // Render a nested list
//                 return (
//                     <li key={index}>
//                         {ordered ? (
//                             <ol>{renderList(item)}</ol>
//                         ) : (
//                             <ul>{renderList(item)}</ul>
//                         )}
//                     </li>
//                 );
//             }
//             return <li key={index}>{item}</li>; // Render a single list item
//         });
//     };

//     return (
//         <div className={styles.blogList}>
//             {ordered ? (
//                 <ol>{renderList(items)}</ol>
//             ) : (
//                 <ul>{renderList(items)}</ul>
//             )}
//         </div>
//     );
// }

// export default BlogList;

import React from 'react';
import styles from '../stylesheets/blogList.module.css';

function UnorderedList({type = "unordered",  items }) {
    return (
        <>
            {type === "ordered" ? (
                <ol className={styles.blogList}>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
            ) : (
                <ul className={styles.blogList}>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </>    
    );
}

export default UnorderedList;
