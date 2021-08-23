import { Component } from "react";
import PropTypes from 'prop-types';



class ChangeShelf extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired
      };
      updateShelf = event =>
    this.props.changeShelf(this.props.book, event.target.value);
    render(){
        const book = this.props.book;
        const books = this.props.books;
        let currentShelf = 'none';

        // if book is in current list, set current shelf to book.shelf
        for (let item of books) {
          if (item.id === book.id) {
            currentShelf = item.shelf;
            break;
          }
        }
        
        return (
             <div className="book-shelf-changer">
                              <select defaultValue={currentShelf} onChange={this.updateShelf} >
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