import React from 'react'
import styled from 'styled-components';


function checkDataType(obj) {
    console.log(obj)
    
    if(obj === true)
    {
        return <input type="checkbox" checked></input>
    }
    else if (obj === false)
    {
        return <input type="checkbox"></input>
    }
}




const jobs = ( {list, colNames, width = 'auto', height = 'auto' }) => {
    return (      
        
        <Container>
            <SearchBox placeholder="Search..." ></SearchBox>
            {list.length > 0 && (
                <JobTable cellSpacing="0" style={{ width: width, height: height }}>
                    {/* Header */}
                    <Tableheader>
                        <tr>
                            {colNames.map((headerItem, index) => (
                                <th key={index}>
                                    {headerItem.toUpperCase()} 
                                </th>
                            ))}
                        </tr>
                    </Tableheader>


                    {/* Data */}
                    <TableBody>
                        {Object.values(list).map((obj, index) => (
                            <tr key={index}>
                                {Object.values(obj).map((value, index2) => (
                                    
                                    <td key={index2}>
                                        {checkDataType(value)}
                                        {value}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </TableBody>
                </JobTable>
                )
            }           
            
        </Container>
    )
}

export default jobs

const SearchBox = styled.input`
    margin: auto;
    border-radius: 8px;
    background-color: gray;
    border: none;
    height:20px;
    width: 250px;
    margin-bottom: 30px;  
    display: block;
    font-weight: bold;

    ::placeholder,
    ::-webkit-input-placeholder {
    color: white;
  }
`


const TableBody = styled.tbody`
`

const JobTable = styled.table`
    margin: auto;

    td {
        border: 0px solid gray;
        padding: 15px 90px;

        
    }

    tr {
        &:hover {
            opacity: 0.8;
            background-color: gray;
        }
    }

    th {
        padding: 10px;
        border-bottom: 2px solid red;

        &:hover {
            font-size: 18px;
            color: red;
            cursor: pointer;
        }
        
    }

`




const Tableheader = styled.thead`
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    color: white;
    
`

const Wrap = styled.div`
    position: relative;
    text-align: center;
    padding: 5px 0 5px 0;
    cursor: pointer;
    border-radius: 10px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        
        
   }
`


const Container = styled.div`
    margin-top: 10px;
    padding: 10px 0 15px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
`




{/* <Wrap>
                Job Name
            </Wrap>
            <Wrap>
                WO Number
            </Wrap>
            <Wrap>
                Materials
            </Wrap>
            <Wrap>
                Scheduling
            </Wrap> */}