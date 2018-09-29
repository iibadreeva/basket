import React, { Component } from 'react';
import axios from 'axios'
import { Container, Card } from 'semantic-ui-react'

// import Menu from './Menu.jsx'
import BookCard from '../containers/BookCart'
import Filter from '../containers/Filter'
import Menu from '../containers/Menu'

class App extends Component {

  componentWillMount(){
    const { setBooks } = this.props;
    // axios.get('https://raw.githubusercontent.com/Archakov06/react-shopping-cart/master/public/books.json').then(({ data }) => {
    axios.get('/books.json').then(({ data }) => {
      setBooks(data);
    })
  }

  render() {
    const { books } = this.props;
    return (
      <Container>
        <Menu />
        <Filter />
          <Card.Group centered>
        {!books
            ? 'Загрузка...'
            : books.map(book => (
                <BookCard key={book.id} {...book} />
            ))
        }
          </Card.Group>
      </Container>
    );
  }
}

export default App;