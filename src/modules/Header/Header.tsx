import React from "react";
import styled from "styled-components";

import { Button } from "../Button";

import { IItem } from "../../App";

interface IHeaderProps {
    checkAll: () => void;
    clearAll: () => void;
    items: IItem[];
}

export const Header = ({ checkAll, clearAll, items }: IHeaderProps) => {

    const inactiveItems = () => {
        let inactiveCount: number = 0;
        items.forEach((item) => {
            if (item.active == false) {
                inactiveCount++;
            }
        })
        return inactiveCount;
    }

    return (
        <Container>
            <Counter>
                <span>{items.length} Tasks</span>
                <span>{inactiveItems()} Remain</span>
            </Counter>

            <ButtonContainer>
                <Button label='Check all' action={checkAll}/>
                <Line/>
                <Button label='Clear all' action={clearAll}/>
            </ButtonContainer>
        </Container>
    );
}

const Container = styled.div`
  border-bottom: 1px solid #F8F8FF;
`

const Counter = styled.div`
  font-size: 24px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20%;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;
`

const Line = styled.div`
  height: 30px;
  border: 1px solid #F8F8FF;
`