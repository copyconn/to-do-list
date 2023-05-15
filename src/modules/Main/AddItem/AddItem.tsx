import React, { useRef } from "react";
import { IItem } from "../../../App";
import classes from './additem.module.css';

interface IAddItemProps {
    addItem: (val: string) => void;
}

export const AddItem = ({ addItem }: IAddItemProps) => {

    const inputEl = useRef<HTMLInputElement | null>(null);

    const submit = () => {
        if (inputEl.current?.value != '') {
            addItem(inputEl.current?.value)
            inputEl.current.value = '';
        } else {
            alert('Введите текст в поле');
        }
    }

    return (
        <div className={classes.addContainer}>
            <input
                ref={inputEl}
                type="text"
                placeholder="Add Todo..."
                className={classes.inputAdd}
            ></input>
            <button className={classes.addButton} onClick={submit}>Add</button>
        </div>
    );
}