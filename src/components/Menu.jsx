import React from 'react'
import { Menu, List, Image, Popup, Button } from 'semantic-ui-react';

const CartComponent = ({ title, id, image, author, removeFromCart }) => (
    <List selection divided verticalAlign='middle'>
        <List.Item>
            <List.Content floated="right">
                <Button onClick={removeFromCart.bind(this, id)} color='red'>Удалить</Button>
            </List.Content>
            <Image avatar src={image} />
            <List.Content>
                <List.Header as='a'>{title}</List.Header>
                <List.Description>
                    {author}
                </List.Description>
            </List.Content>
        </List.Item>
    </List>
);

const MenuComponent = ({ totalPrice, count, items }) => (
    <Menu>
        <Menu.Item
            name='browse'
            onClick={this.handleItemClick}>
            Магазин книг
        </Menu.Item>

        <Menu.Menu position='right'>
            <Menu.Item
                name='signup'
                onClick={this.handleItemClick}>
                Итого: &nbsp;<b>{ totalPrice }</b>&nbsp; руб.
            </Menu.Item>

            <Popup
                trigger={
                    <Menu.Item
                        name='help'
                        onClick={this.handleItemClick}>
                        Корзина (<b>{ count }</b>)
                    </Menu.Item>
                }
                content={items.map((book, id) => <CartComponent key={id} {...book} />)}
                on="click"
                hideOnScroll
            />
        </Menu.Menu>
    </Menu>
)

export default MenuComponent;