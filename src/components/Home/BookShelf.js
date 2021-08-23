import React from 'react';
import PropTypes from 'prop-types';
import ChangeShelf from './ChangeShelf';
import Books from './Books';

class BookShelf extends React.Component {
  static propTypes = {

    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
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
              <Books

                book={book}
                books={books}
                key={book.id}
                changeShelf={changeShelf}
              />

            ))}


          </ol>
        </div>
      </div>



    )
  }

}

export default BookShelf;