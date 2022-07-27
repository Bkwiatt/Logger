import React, { useState } from 'react'
import styled from 'styled-components'
import { Users } from '../users.js'

const Table = ({ data }) => {

    const cartItems = []

    const AddToCart = (item) => {
        cartItems.push(item)

        console.log(cartItems['first_name'])
        
    

        
}


    return (
        <MaterialContainer>
            <Tableleft>
                    <tbody>
                    <tr>
                        <TableHeader>ID</TableHeader>
                        <TableHeader>Name</TableHeader>
                        <TableHeader>Surname</TableHeader>
                        <TableHeader>Gender</TableHeader>
                        <TableHeader>Email</TableHeader>
                        <TableHeader></TableHeader>
                    </tr>
                    {data.map((item) => (
                    <TableRow key={item.id}>
                        <TableData>{item.id}</TableData>
                        <TableData>{item.first_name}</TableData>
                        <TableData>{item.last_name}</TableData>
                        <TableData>{item.gender}</TableData>
                        <TableData>{item.email}</TableData>
                        <TableData><AddButton onClick={e => AddToCart({item})}>+</AddButton></TableData>
                    </TableRow>
                    ))}            
                </tbody>       
            </Tableleft>

            <TableRight>
                    <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Gender</th>
                        <th>Email</th>
                    </tr>
                    {data.map((item) => (
                    <TableRow key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.gender}</td>
                        <td>{item.email}</td>
                        <td><button></button></td>
                    </TableRow>
                    ))}            
                </tbody>       
            </TableRight>
        
        </MaterialContainer>
        
    )
} 

export default Table



const AddButton = styled.button`
    background-color: transparent;
    margin-bottom: 2px;
    color: white;
    border: 1px solid white;
    cursor: pointer;

    &:hover {
        font-weight: bold;
        background-color: white;
        border: 2px solid black;
        color: black;
        font-size: 14px;

    }
`

const TableHeader = styled.th`
    border-bottom: 2px solid red;
    padding-top: 5px;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 3px;

    &:hover {
        cursor: pointer;
        color: red;
        font-size: 18px;
    }
`

const MaterialContainer = styled.div`
`

const TableData = styled.td`
    padding-top: 10px;
    border-bottom: 1px solid red;
`

const TableRow = styled.tr`
    cursor: pointer;

    &:hover {
        background-color: gray;
    }
`

const Tableleft = styled.table`
border-collapse: collapse;
    padding: 0px;
    display: inline-block;
    border-radius: 5px;
    float: left;


`

const TableRight = styled.table`
    float: right;
    border-radius: 5px;
    font-weight: bold;
`

