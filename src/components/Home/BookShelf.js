import React from  'react';
import PropTypes from 'prop-types';
import ChangeShelf from './ChangeShelf';


class BookShelf extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeBookShelf: PropTypes.func.isRequired
  };
  
    render() {

        const shelfBooks = this.props.books;
        const book = this.props.book;
        const books = this.props.books;
        const changeShelf = this.props.changeShelf;
        
        

        return (
           
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {shelfBooks.map(book => (
                        <li key = {book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" 
                            style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}>

                            </div>
                           <ChangeShelf book={book} books={books} changeShelf={changeShelf} />
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>

                    ))}
                     

                    </ol>
                  </div>
                </div>
              
           
           
        )
    }

}

export default BookShelf;