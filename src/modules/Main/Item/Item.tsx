import React from "react";
import styled from "styled-components";
import { Checkbox } from '@mantine/core';

import { Button } from "../../Button";

interface IItemProps {
    value: string;
    active: boolean;
    id: number;
    chooseItem: (id: number) => void;
    deleteItem: (id: number) => void;
}

export const Item = ({ value, active, id, chooseItem, deleteItem }: IItemProps) => {
    return (
        <Container>
            <Checkbox
                label={value}
                color="dark"
                checked={active}
                onChange={() => chooseItem(id)}
            />

            <Button label="Delete" action={() => deleteItem(id)}/>
        </Container>
    )
}

const Container = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;

  &&:hover {
    background: #f9f9f9;
  }
`