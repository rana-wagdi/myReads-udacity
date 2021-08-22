import { Component } from "react";
import PropTypes from 'prop-types';



class ChangeShelf extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired
      };
    render(){
        const book = this.props.book;
        const books = this.props.books;
        
        return (
             <div className="book-shelf-changer">
                              <select value={book.shelf} onChange={e => this.props.changeShelf(book, e.target.value)} >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
        )
    }
}

export default ChangeShelf;