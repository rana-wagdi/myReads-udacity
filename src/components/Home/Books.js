import { Component } from 'react';
import PropTypes from 'prop-types';
import ChangeShelf from './ChangeShelf';



class Books extends Component {
    




    render () {
         const book = this.props.book;
         const books = this.props.books;
         const changeShelf = this.props.changeShelf;
         const coverImg =
         book.imageLinks && book.imageLinks.thumbnail;

        return (
            <li key = {book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" 
                style={{ width: 128, height: 193, backgroundImage: `url(${coverImg})`}}>

                </div>
               <ChangeShelf book={book} books={books} changeShelf={changeShelf} />
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
            </div>
          </li>
    
        )
    }
    }

    Books.propTypes = {
        book: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired
      };
   
export default Books;