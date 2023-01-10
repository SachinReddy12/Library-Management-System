import { useState, useEffect } from 'react';
import '../styles/addbooks.css'
import { useNavigate } from 'react-router-dom';
const AddBooks = () => {
    let [title, settitle] = useState("");
    let [categories, setcategories] = useState('');
    let [authors, setauthors] = useState('');
    let [pageCount, setpageCount] = useState('');
    let [shortDescription, setshortDescription] = useState('');
    let [longDescription, setlongDescription] = useState('');
    let [thumbnailUrl, setthumbnailUrl] = useState('');

    let nav = useNavigate();

    let submit = (e) => {
        e.preventDefault();
        let data = { title, categories, authors, pageCount, shortDescription, longDescription, thumbnailUrl };
        console.log(data);

        fetch('http://localhost:2050/books/',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            }
        )
        alert('Add Sucssfully..')
        nav('/admin/book-list')
    }
    return (
        <div className="addBooks">
            <div className="add">
                <h1>Add New Books</h1>
                <form action="" onSubmit={submit}>
                    <div className="title">
                        <input type="text" required placeholder="Enter title" value={title} onChange={(e) => settitle(e.target.value)} />
                    </div>

                    <div className="categories">
                        <input type="text" required placeholder="Enter categories" value={categories} onChange={(e) => setcategories(e.target.value)} />
                    </div>

                    <div className="Authors">
                        <input type="text" required placeholder="Enter Authors" value={authors} onChange={(e) => setauthors(e.target.value)} />
                    </div>

                    <div className="pageCount">
                        <input type="number" required placeholder="Enter Pagecount" value={pageCount} onChange={(e) => setpageCount(e.target.value)} />
                    </div>
                    <div className="thumbnailUrl">
                        <input type="text" required placeholder='Enter thumbnailUrl' value={thumbnailUrl} onChange={(e) => setthumbnailUrl(e.target.value)} />
                    </div>
                    <div className="shortDescription">
                        <textarea name="" required id="" cols="60" rows="5" placeholder='shortDescription' value={shortDescription} onChange={(e) => setshortDescription(e.target.value)}></textarea>
                    </div>
                    <div className="longDescription">
                        <textarea name="" required id="" cols="80" rows="8" placeholder='longDescription' value={longDescription} onChange={(e) => setlongDescription(e.target.value)}></textarea>
                    </div>

                    <button>Add</button>

                </form>
            </div>
        </div>
    );
}

export default AddBooks;