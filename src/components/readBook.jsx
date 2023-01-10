import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ReadBooks = () => {
   let [book, setBook] = useState([]);
let para=useParams();
  useEffect(() => {
    let fetchData = async () => {
      let responce = await fetch(`http://localhost:2050/books/${para.id}`);
      let data = await responce.json();
      setBook(data);
    }
    fetchData();
  }, [book])
    return (
        <div className="readBooks">
            <h1>{book.title}</h1>
            <p>{book.shortDescription}</p>
            <p>{book.longDescription}</p>
            
        </div>
    );
}

export default ReadBooks;