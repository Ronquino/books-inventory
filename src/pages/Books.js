import React, {useState, useEffect} from "react";
import BooksList from "../components/BooksList";

//get values from local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('books');
  if(data){
    return JSON.parse(data);
  }else{
    return []
  }
}

const Books = () => {
  //array of items
  const [books, setBook]=useState(getDatafromLS);
  //input field states
  const [bookName, setBookName]=useState('');
  const [author, setAuthor]=useState('');
  const [genre, setGenre]=useState('');

  // create on submit
  const handleAddBooks = (e)=>{
    e.preventDefault();
    //create
    let book={
      bookName,
      author,
      genre,
    }
    setBook([...books, book]);
    setBookName('');
    setAuthor('');
    setGenre('');
  }

   //save to table
   useEffect(()=>{
    localStorage.setBook('books', JSON.stringify(books));
  },[books])

  //deletion
  const deleteBook=(bookName)=>{
    setBook(books.filter(i => i.bookName !== bookName));
  }


  return ( 
   
    <div className="wrapper">
      <h1 className="text-center">ALL BOOKS</h1>
      <div className="main">

        <div className="form-container">
          <form className="form-group" action="" autoComplete="off" onSubmit={handleAddBooks}>
            <label htmlFor="">Book Title</label>
            <input className="form-control" type="text" required onChange={(e)=>setBookName(e.target.value) } value={bookName} /> <br />
            <label htmlFor="">Author</label>
            <input className="form-control" type="text" required onChange={(e)=>setAuthor(e.target.value) } value={author}/> <br />
            <label htmlFor="">Genre</label>
            <input className="form-control" type="text" required onChange={(e)=>setGenre(e.target.value) } value={genre}/> <br />
            <button className="add-btn" type="submit"> Add book to list</button>
          </form>
        </div>

        <div className="view-container">
          {books.length > 0 && <>
            <div className="table-responsive">
              <table className="table">
              <thead className="table-header">
                <tr>
                  <th className="text-center">Book Name</th>
                  <th className="text-center">Author</th>
                  <th className="text-center">Genre</th>
                  <th className="text-center">Delete</th>
                </tr>
              </thead> 
              <tbody className="text-center">
                <BooksList books={books} deleteBook={deleteBook}/>
              </tbody>
              </table>
              
            </div>
          </>}
          <div className="view-container">
          {books.length < 1 && <div className="when-empty text-center">No items added in inventory yet</div>}
            
          </div>
        </div>
      </div>

    </div>
  );
}
 
export default Books;