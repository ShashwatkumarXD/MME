import React from 'react';
import styles from '../stylesheets/blogTable.module.css'

/*table={[['row1col1', 'row1col2', 'row1col3'], ['row2col1', 'row2col2', 'row2col3'], ['row3col1', 'row3col2', 'row3col3']]}></BlogTable>
*/
function BlogTable(props) {
    return (
      <table className={styles.blogTable}>
        <thead>
          <tr>
            {props.table[0].map((header, index) => {
              return <th cellId={index} key={index}>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {props.table.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex + 1}>
              {row.map((cell, cellIndex) => {
                return <td cellId={`${rowIndex + 1}, ${cellIndex}`} key={`${rowIndex + 1}, ${cellIndex}`}>{cell}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    );
}

export default BlogTable;
