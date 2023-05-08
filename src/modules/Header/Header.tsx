import React from "react";
import { IItem } from "../../App";
import { Actions } from "./Actions/Actions";
import { AddItem } from "./AddItem/AddItem";
import classes from './header.module.css';

interface IHeaderProps {
    checkAll: () => void;
    clearAll: () => void;
    items: IItem[];
}

export function Header({checkAll, clearAll, items}: IHeaderProps) {

    const inactiveItems = () => {
        let inactiveCount:number = 0;
        items.forEach((item) => {
            if(item.active == false) {
                inactiveCount++;
            }
        })
        return inactiveCount;
    }

    return (
        <div className={classes.Header}>

            <div className={classes.tasksCount}>
                <span className={classes.tasks}>{items.length} Tasks</span>
            </div>
            <div className={classes.remainCount}>
                <span className={classes.remain}>{inactiveItems()} Remain</span>
            </div>
            
            {/* <button onClick={checkAll}>Выбрать все</button>
            <button onClick={clearAll}>Очистить</button> */}
        </div>
    );
}