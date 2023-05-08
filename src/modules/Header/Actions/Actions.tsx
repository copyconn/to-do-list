import React from "react";
import { IItem } from "../../../App";

interface IActionsProps {
    items: IItem[];
}

export function Actions({items}: IActionsProps) {
    const ChooseAll = () => {
        for(let i = 0; i < items.length; i++) {
            items[i].active = true;
        }
    }

    const ClearAll = () => {
        console.log('clear')
    }

    return (
        <div>
            <button onClick={ChooseAll}>Выбрать все</button>
            <button onClick={ClearAll}>Очистить</button>
        </div>
    );
}