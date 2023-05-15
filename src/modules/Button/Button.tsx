import React from "react";
import styled from "styled-components";

interface IButtonProps {
    label: string;
    action: (id?: number) => void
}

export const Button = ({ label, action }: IButtonProps) => {
    return (
        <Container onClick={() => action()}>{label}</Container>
    )
}

const Container = styled.button`
  border-radius: 30px;
  border: 1px solid #696969;
  background: white;
  height: 30px;
  padding: 0 15px;

  &&:hover {
    background: #dcdcdc;
    cursor: pointer;
  }
`