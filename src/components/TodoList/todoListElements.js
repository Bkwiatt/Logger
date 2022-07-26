import styled from 'styled-components'

export const TodoWrap = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #040714;
    color: gray;
    overflow: auto;
`

export const TodoContainer = styled.div`
    width: 25%;
    height: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -75%);
    padding: 15px;
    border-radius: 10px;
    background-color: none;
    @media screen and (max-Width: 450px) {
        width: 90%;
        transform: translate(-50%, -100%);
    }
    @media screen and (max-Width: 400px) {
        width: 100%;
        transform: translate(-50%, -100%);
    }
`

export const AddActionButton = styled.button`
    margin: 0 3px;
    padding: 2px;
    font-weight: bold;
    font-size: 18px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: blue;
`

export const ClearActionButton = styled.button`
    margin: 0 3px;
    padding: 2px;
    font-weight: bold;
    font-size: 18px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: red;
`

export const TodoInput = styled.input`
    margin-right: 10px;
    transform: scale(1.2);
    
`
export const TodoItemContainer = styled.div`
    color: black;
`

export const TodoAddContainer = styled.div`
    display: flex;
    height: 50px;
    justify-content: space-between;
    background-color: gray;
    margin-bottom: 20px;
    padding: 5px;
    padding-left: 10px;
`

export const TodoListContainer = styled.div`
    text-align: left;
    background-color: gray;
    padding: 30px;
    min-height: 300px;
`

export const TodoInputBox = styled.input`
    border-width:0px;
    background-color: gray;
    border:none;
    width: 80%;
    font-size: 20px;
    font-weight: bold;
    color: white;

    &:hover {
        cursor: pointer;
    }
    
    &:focus {
        outline: none;
    }

    &::placeholder {
        color: white;
    }
`

export const TodoHr = styled.hr`
    background-color: #01bf71;
    width: 100%;
    height: 2px;
`

export const TodoH1 = styled.h1`
    text-align: center;
    color: rgba(45, 85, 255, 1);
    margin-top: 0;
    @media screen and (max-Width: 350px) {
        font-size: 50px;
    }
`

export const ClearDiv = styled.div`
    display: flex;
    height: 50px;
    justify-content: space-between;
    background-color: gray;
    margin-bottom: 0px;
    padding: 10px;
    color: black;
    vertical-align: middle;
`

export const CounterP = styled.p`
    height: 250px;
    margin: 5px;
    font-size: 14px;
    display: inline-block;
    vertical-align: middle;
`

export const LabelStyle = styled.label`
    font-size: 18px;
    font-weight: bold;
    word-wrap: break-word;
    color: ${props => props.todo ? "red" : "black"};
    text-decoration: ${props => props.todo ? "line-through" : "none"};
`
