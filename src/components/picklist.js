import React, { useState } from 'react'
import Navbar from '../components/navbar'
import styled from 'styled-components'
import Table from './table'
import { Users } from "../users.js"



const Picklist = () => {
    const [query, setQuery] = useState("")

    const keys = ["first_name", "last_name", "email", "gender"]

    const search = (data) => {
        return data.filter(item=> 
            keys.some(key=>item[key].toLowerCase().includes(query))
            )
    }

    return (
        <>
            <Navbar></Navbar>
            <PicklistContainer>
                <SearchBox type="text" placeholder="Search..." onChange={e=> setQuery(e.target.value.toLowerCase())}/>
                <Table data={search(Users)}/>
            </PicklistContainer>
        </>
        
       
    )
}

export default Picklist




const PicklistContainer = styled.div`
    text-align: center;
    width: 90%;
    height: 400px;
    margin: auto;
    margin-top: 20px;
    padding: 20px;
`

const SearchBox = styled.input`
    margin: auto;
    border-radius: 8px;
    background-color: gray;
    border: none;
    height:20px;
    width: 500px;
    margin-bottom: 30px;  
    display: block;
    font-weight: bold;
    padding: 8px;

    cursor: pointer;

    ::placeholder,
    ::-webkit-input-placeholder {
    color: white;
    }
`


const ListContainer = styled.ul`
    text-align: left;
`

const ListItems = styled.li`
    color: white;
    font-weight: bold;
    list-style: none;

`