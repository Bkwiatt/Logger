import React, { useState } from 'react'
import styled from 'styled-components'
import { Users } from '../users.js'

const Table = ({ data }) => {



    return (
        <table>
            <tc>
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
                </TableRow>

                ))}
                
            </tbody>
            </tc>

            <tc>
                <tbody>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Gender</th>
                    <th>Email</th>
                </tr>
                {data.map((item) => (
                <tr key={item.id} >
                    <td>{item.id}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.gender}</td>
                    <td>{item.email}</td>
                </tr>
                ))}
                
            </tbody>
            </tc>
            

        </table>
    )
} 

export default Table

const TableRow = styled.tr`
    cursor: pointer;

    &:hover {
        background-color: lightblue;
    }
`
