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
        query: ''
    };
  
    handleUpdateQuery(query) {
        BooksAPI.search(query).then(books => books ? this.setState({ books }) : []);
        this.setState({ query });
    }
  
    changeShelf(book, shelf) {
      BooksAPI.update(book, shelf)
          .then(() => shelf !== 'none' ? alert(`${book.title} has been added to your shelf!`) : null)
          .catch(() => alert('Something went wrong! Please try again!'));
    }
    renderSearchResults() {
      const { books, query } = this.state;

      if (query) {
          return books.error ?
              <div>No results found</div>
              : books.map((book, index) => {
                  return (
                      <Books
                          key={book.id}
                          books={books}
                          book={book}
                          changeShelf={this.changeShelf.bind(this)}
                      />
                  );
              });
      }
  }


    render() {

    
        return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close </Link>
              <div className="search-books-input-wrapper">
               
                <input type="text" value={this.state.query} onChange={e => this.handleUpdateQuery(e.target.value)} placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
            <div>
              <h3>Search returned books </h3>
              <ol className="books-grid">
              

             { this.renderSearchResults()}
   
              </ol>
            </div>
          
              <ol className="books-grid"></ol>
            </div>
          </div>
        )
    }


}

export default Search;