import React from 'react';
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

const BooksList = ({books, deleteBook}, index) => {
  return books.map(book=>(
    <tr key={book.bookName}> 
      <td>{book.bookName}</td>
      <td>{book.author}</td>
      <td>{book.genre}</td>
      <td className='btn' onClick={()=>deleteBook(book.bookName)}>
        <Icon icon={trash}></Icon>

      </td>
    </tr>
  ))
}
 
export default BooksList;