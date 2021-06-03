import React, { useState, useEffect } from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';

const Todo = () => {

  const initialState = {
    items: [
      {
        value: 'Написать новое приложение',
        isDone: false,
        id: 1
      },
      {
        value: 'Сделать коммит',
        isDone: false,
        id: 2
      },
      {
        value: 'Запушить',
        isDone: false,
        id: 3
      }
    ],
    count: 3
  };

  const [items, setItems] = useState(initialState.items);
  const [count, setCount] = useState(initialState.count);

  useEffect(() => {
    console.log('componentDidMount');
  }, []);

  useEffect(() => {
    console.log('componentDidUpdate');
  }, [items]);

  const onClickDone = id => {
    const newItemList = items.map(item => {
      const newItem = { ...item};

      if (item.id === id) {
        newItem.isDone =!item.isDone;
      }

      return newItem;
    });

    setItems(newItemList);
  };

  const onClickDelete = id => {
    const newItemList = items.filter(item => item.id !== id);

    setItems(newItemList);
    setCount(count - 1);
  };

  const onClickAdd = value => {
    setItems([
      ...items,
      {
        value,
        isDone: false,
        id: count + 1
      }
    ]);
    setCount(count + 1);
  };

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Список дел</h1>
      <InputItem onClickAdd={onClickAdd} />
      <ItemList 
        items={items} 
        onClickDone={onClickDone} 
        onClickDelete={onClickDelete} />
      <Footer count={count} />
    </div>);
};

export default Todo;