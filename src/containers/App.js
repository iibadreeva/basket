import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions from '../actions/books';
import App from '../components/App.jsx'
import orderBy from 'lodash/orderBy'

// https://lodash.com/docs/4.17.10#orderBy
const sortBy = (books, filterBy) => {
    switch (filterBy){
        case 'all':
            return books;
        case 'popular':
            return orderBy(books, 'id', 'desc');
        case 'price_hight':
            return orderBy(books, 'price', 'desc');
        case 'price_low':
            return orderBy(books, 'price', 'asc');
        case 'author':
            return orderBy(books, 'author', 'asc');
        default:
            return books;
    }
};

const filterBooks = (books, searchQuery) =>
    books.filter(
        o =>
            o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
            o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
    );

const searchBooks = (books, filterBy, searchQuery) => {
    return sortBy(filterBooks(books, searchQuery), filterBy);
}

const mapStateToProps = ({ books, filter }) => ({
    books: books.items && searchBooks(books.items, filter.filterBy, filter.searchQuery),
    isReady: books.isReady
});

// const mapDispatchToProps = dispatch => ({
//     setBooks: books => dispatch(setBooks(books))
// });
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(booksActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);