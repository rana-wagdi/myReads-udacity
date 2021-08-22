import React from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';


class BookList extends React.Component {

    render() {
        const allBooks = this.props.allBooks;
        const changeShelf = this.props.changeShelf;

        const currentlyReading = allBooks.filter(book => book.shelf === "currentlyReading");

        const wantToRead = allBooks.filter(book => book.shelf === "wantToRead");
        const read = allBooks.filter(book => book.shelf === "read");



        return (
            <div className="list-books-content">



                <BookShelf books={currentlyReading} title={"Currently Reading"} changeShelf={this.props.changeShelf} />
                <BookShelf books={wantToRead} title={"Want to Read"} changeShelf={this.props.changeShelf} />
                <BookShelf books={read} title={"Read"} changeShelf={this.props.changeShelf} />





            </div>
        )


    }

}

BookList.propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
};


export default BookList;