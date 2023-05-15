import React from "react";

import { Item } from "./Item";
import { AddItem } from "./AddItem";

import { IItem } from "../../App";

interface IMainProps {
    items: IItem[];
    chooseItem: (id: number) => void;
    addItem: (val: string) => void;
    deleteItem: (id: number) => void;
}

export const Main = ({ items, chooseItem, addItem, deleteItem }: IMainProps) => {
    console.log(items)
    return (
        <div>
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

            <AddItem addItem={addItem}/>
        </div>
    )
}