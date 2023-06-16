import React from 'react';
import ReactDom from 'react-dom';
// CSS
import './index.css'; 
import {booksdata} from './books'
import Book from './Book'
//setup vars
function Booklist(){
    return(
        <section className='booklist'>
            {booksdata.map((book, index)=> {
                return  <Book key={book.id} {...book}></Book>;
        })}
        </section>
    );
}

ReactDom.render(<Booklist />, document.getElementById('root'))