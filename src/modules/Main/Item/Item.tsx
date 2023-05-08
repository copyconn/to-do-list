import React from "react";
import classes from './item.module.css';

interface IItemProps {
    value: string;
    active: boolean;
    id: number;
    chooseItem: (id: number) => void;
    deleteItem: (id: number) => void;
}

export function Item({value, active, id, chooseItem, deleteItem}: IItemProps) {

    return (
        <div className={classes.Item}>
            <label>
                <input 
                    type="checkbox" 
                    className={classes.itemCheck} 
                    checked={active} 
                    onChange={() => chooseItem(id)}
                ></input>
                {value}
            </label>

            <button className={classes.delButton} onClick={() => deleteItem(id)}>Delete</button>
        </div>
    )
}