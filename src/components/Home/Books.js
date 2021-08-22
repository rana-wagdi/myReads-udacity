import { Component } from 'react';

import * as BooksAPI from '../../BooksAPI';


class Books extends Component {
    



    componentDidMount(){

           BooksAPI.getAll().then(books => this.setState({ books }));
    }
    render () {
         const book = this.props.book;
         const books = this.props.books;
         const changeShelf = this.props.changeShelf;


        return (
            <div>
    
            </div>
    
        )
    }
    }
   
export default Books;