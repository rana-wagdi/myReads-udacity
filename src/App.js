import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, BrowserRouter } from "react-router-dom";
import { Component } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import SearchButton from './components/Search/SearchButton';
import BookList from './components/Home/BookList';
import *as BooksAPI from './BooksAPI';

import './App.scss'

class App extends Component {

  state = {
    
 
    books: [],
    query: ""
  }


  updateSearchPage = state => {
    this.setState({ showSearchPage: state });
  }

  
  componentDidMount() {

    BooksAPI.getAll().then(books => this.setState({ books }))
  }




  
  changeShelf = (changedShelfs, shelf) => {


    BooksAPI.update(changedShelfs, shelf).then(response => {
      changedShelfs.shelf = shelf;

      this.setState(prevState => ({
        books: prevState.books

          .filter(book => book.id !== changedShelfs.id)

          .concat(changedShelfs)
      }));
    });
  };



  render() {
    const { books } = this.state;
    return (

      <BrowserRouter>

        <div className="app">


          <Route
            path="/search"
            render={() => (
              <Search books={books} changeShelf={this.changeShelf} />
            )}

          />


          <Route
            exact
            path="/"
            render={() => (
              <div className="list-books">
                <Header />
                {/* <Books /> */}

                <BookList allBooks={this.state.books} changeShelf={this.changeShelf} />
                <Link to="/search">
                  <SearchButton showSearchPage={this.updateSearchPage} />
                </Link>
              </div>



            )}

          />
        </div>
      </BrowserRouter>
    );
  }

}

export default App;


