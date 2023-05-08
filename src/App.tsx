import React, { useEffect, useState } from 'react';
import { Header } from './modules/Header/Header';
import { Body } from './modules/Main/Body';
import axios from "axios";

export interface IItem {
  id: number;
  text: string;
  active: boolean;
}

const initialItems: IItem[] = [
  // {id: 1, text:'сходить в магазин', active: false},
  // {id: 2, text:'полить цветы', active: false}, 
  // {id: 3, text:'заправить кровать', active: false}
]



function App() {
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    axios.get("http://127.0.0.1:3002").then((res) => setItems(res.data));

    // const fetchData = async () => {
    //   const result = await axios(
    //     `http://127.0.0.1:3002`,
    //   );
    //   setItems(result.data);
    // };
    // fetchData();
    // setItems(result.data);

  }, [])

  const checkAll = () => {
    const newItems = items.map((item) => {
      return {
        ...item,
        active: true,
      }
    });
    setItems(newItems);
  }

  const clearAll = () => {
    const newItems = items.map((item) => {
      return {
        ...item,
        active: false,
      }
    });
    setItems(newItems);
  }

  const addItem = (val: string) => {
    console.log(val);
    const lastItem = items[items.length - 1]
    const nextId = lastItem.id + 1;
    const newItems = [...items, {id: nextId, text: val, active: false}];
    setItems(newItems);
  }

  const chooseItem = (id: number) => {
    const newItems = items.map((item) => {
      if(item.id == id) {
        return{
          ...item,
          active: !item.active,
        } 
      } else {
        return item;
      }
    });

    setItems(newItems);
  }

  const deleteItem = (id: number) => {
    const newItems = items.filter((item) => {
      if(item.id == id) {
        return false;
      } else {
        return true;
      }
    })
    setItems(newItems);
  }

  return (
    <div className="App">
      <Header 
        checkAll={checkAll} 
        clearAll={clearAll} 
        items={items} 
      />
      <Body 
        items={items} 
        chooseItem={chooseItem} 
        addItem={addItem} 
        deleteItem={deleteItem} 
      />


    </div>
  );
}

export default App;