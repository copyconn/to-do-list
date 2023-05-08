import React from "react";
import { IItem } from "../../App";
import { AddItem } from "../Header/AddItem/AddItem";
import { Item } from "./Item/Item";
import classes from './body.module.css';

interface IBodyProps {
    items: IItem[];
    chooseItem: (id: number) => void;
    addItem: (val: string) => void;
    deleteItem: (id: number) => void;
}

export function Body({items, chooseItem, addItem, deleteItem}: IBodyProps) {
    return (
        <div className={classes.bodyContainer}>
            {
            items.map((el) => {
               return <Item 
                        value={el.text} 
                        key={el.id} 
                        active={el.active} 
                        chooseItem={chooseItem} 
                        id={el.id} 
                        deleteItem={deleteItem} 
                    />
            }) 
            }

            <AddItem addItem={addItem} />
        </div>
    )
}