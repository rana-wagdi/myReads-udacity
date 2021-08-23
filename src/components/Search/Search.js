import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import * as BooksAPI from '../../BooksAPI';

import Books from '../Home/Books';


class Search extends React.Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired
      };

      state = {
        books: [],
        newBooks: [],
        query: ''
    };
  
    getBooks = event => {
      const query = event.target.value;
      this.setState({ query });
  
      // if user input => run the search
      if (query) {
        BooksAPI.search(query.trim(), 20).then(books => {
          books.length > 0
            ? this.setState({ newBooks: books, searchErr: false })
            : this.setState({ newBooks: [], searchErr: true });
        });
  
        // if query is empty => reset state to default
      } else this.setState({ newBooks: [], searchErr: false });
    };
  

    render() {
      const { query, newBooks, searchErr } = this.state;
      const { books, changeShelf } = this.props;
  
    
        return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close </Link>
              <div className="search-books-input-wrapper">
               
                <input type="text" value={this.state.query} onChange={this.getBooks} placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
            <div>
              <h3>Search returned books </h3>
              <ol className="books-grid">
              

              {newBooks.map(book => (
                  <Books
                    book={book}
                    books={books}
                    key={book.id}
                    changeShelf={changeShelf}
                  />
                ))}
              </ol>
            </div>
          
              <ol className="books-grid"></ol>
            </div>
          </div>
        )
    }


}

export default Search;