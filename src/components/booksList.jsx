import { useState, useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import '../styles/booksList.css'
const BooksList = () => {
  let [book, setBook] = useState([]);
 let location=useLocation();
  useEffect(() => {
    let fetchData = async () => {
      let responce = await fetch(`http://localhost:2050/books/`);
      let data = await responce.json();
      setBook(data);
    }
    fetchData();
  }, [book])
  //DELETE A BOOK FROM THE SERVER PEAMANETLY
  let remove = (id, title) => {
    fetch(`http://localhost:2050/books/${id}`, {
      method: 'DELETE'

    })
    alert(`${title} WILL BE DELETED PERMANETLY`);
  }
  let nav = useNavigate();
  let readmore = (id) => {
    if(location.pathname == '/admin/book-list'){
    nav(`/admin/book-list/${id}/`);
    }
    else{
      nav(`/user/book-list/${id}/`)
    }
  }
  return (
    <div className="booksList">
      <h1>Books List: {book.length}</h1>
      <div className="books_section">
        {book.map((x) => (
          <div className="lists">
            <div className="images">
              <img src={x.thumbnailUrl} alt='x.thumbnailUrl' />
            </div>
            <div className="content">
              <h1>Title: {x.title}</h1>
              <p>Authors: {x.authors.toString()}</p>
              <p>categories: {x.categories.toString()}</p>
              <p>PageCount: {x.pageCount}</p>

              <button onClick={() => readmore(x.id)}>Read More</button>
              <br />
             {location.pathname == '/admin/book-list' && <button onClick={() => remove(x.id, x.title)}>Delete</button>}
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}

export default BooksList;