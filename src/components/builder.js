import React from 'react'
import { useState } from "react";
import Navbar from '../components/navbar'
import styled from 'styled-components'


const Builder = () => {
    const [count, setCount] = useState(0);



    const buttonActionPlus = () => {
             setCount(count + 1);
    }

    const buttonActionMinus = () => {
        if(count > 0)
        {
            setCount(count - 1);
        }   
    }

    


    return (
        <>
            <Navbar></Navbar>
            <HeaderText>Scope Builder</HeaderText>

            <GridContainer>
                <Item>
                    <ItemButton onClick={buttonActionMinus}>-</ItemButton>
                    <ItemText>Wet System</ItemText>
                    <ItemButton onClick={buttonActionPlus}>+</ItemButton>
                </Item>
                <Item>
                    <ItemButton onClick={buttonActionMinus}>-</ItemButton>
                    <ItemText>Dry System</ItemText>
                    <ItemButton onClick={buttonActionPlus}>+</ItemButton>
                </Item>
                <Item>
                    <ItemButton onClick={buttonActionMinus}>-</ItemButton>  
                    <ItemText>Preaction System</ItemText>
                    <ItemButton onClick={buttonActionPlus}>+</ItemButton>
                </Item>
                <Item>
                    <ItemButton onClick={buttonActionMinus}>-</ItemButton>
                    <ItemText>Deluge System</ItemText>
                    <ItemButton onClick={buttonActionPlus}>+</ItemButton>
                </Item>
                <Item>
                    <ItemButton onClick={buttonActionMinus}>-</ItemButton>
                    <ItemText>Fire Extinguisher</ItemText>
                    <ItemButton onClick={buttonActionPlus}>+</ItemButton>
                </Item>
            </GridContainer>

            <ScopeOutputContainer>
                <ScopeOutputHeader>Scope of Work</ScopeOutputHeader>
                <h3>Provide labor and materials to perform annual inspection on ({count}) [system type] pipe sprinkler systems, per NFPA 25.</h3>
            </ScopeOutputContainer>
        </>
    )
}

export default Builder


const HeaderText = styled.h1`
    text-align: center;
`

const ScopeOutputHeader = styled.h1`
    margin-top: 10px;
    font-size: 25px;
    font-weight: bold;

`

const ItemText = styled.h1`
    display: block;
    font-size: 16px;
    text-decoration: underline;
`

const ItemButton = styled.button`
    background-color: blue;
    border: white 1px solid;
    color: white;
    padding: 9px;
    text-align: center;
    justify-content: center;
    text-decoration: none;
    display: inline-block;
    font-size: 10px;
    width: 30px;
    height: 30px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 8px;
    border-radius: 50%;

    &:hover {
        cursor: pointer;
        width: 33px;
        height: 33px;
    }
`

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 100px;
    width: 80%;
    margin: auto;
    background-color: rgba(70,130,180, 0.2);
    border-radius: 10px;
    border: white 1px solid;
`

 const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: .5rem;
  `


const ScopeOutputContainer = styled.div`
    text-align: center;
    background-color: black;
    width: 70%;
    margin: auto;
    margin-top: 80px;
    border-radius: 10px;
    border: white 1px solid;
`





