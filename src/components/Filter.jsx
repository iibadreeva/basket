import React  from 'react'
import { Input, Menu } from 'semantic-ui-react'

const Filter = (props) => {
    const { setFilter, filterBy, searchQuery, setSearchQuery } = props;

    return (
      <Menu pointing>
          <Menu.Item
              active={filterBy === 'all'}
              onClick={setFilter.bind(this, 'all')} >
              Все
          </Menu.Item>
          <Menu.Item
              active={filterBy === 'popular'}
              onClick={setFilter.bind(this, 'popular')}
          >Популярные</Menu.Item>
          <Menu.Item
              active={filterBy === 'price_hight'}
              onClick={setFilter.bind(this, 'price_hight')}
          >Цена (дорогие)</Menu.Item>
          <Menu.Item
              active={filterBy === 'price_low'}
              onClick={setFilter.bind(this, 'price_low')}
          >Цена (дешевые)</Menu.Item>
          <Menu.Item
              active={filterBy === 'author'}
              onClick={setFilter.bind(this, 'author')}
          >Автор</Menu.Item>

          <Menu.Menu position='right'>
              <Menu.Item>
                  <Input
                      icon='search'
                      onChange={e => setSearchQuery(e.target.value)}
                      value={searchQuery}
                      placeholder='Search...'
                  />
              </Menu.Item>
          </Menu.Menu>
      </Menu>
  )
};



export default Filter;