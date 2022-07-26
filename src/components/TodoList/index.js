import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import Navbar from '../navbar';
import { TodoWrap, TodoContainer, AddActionButton, ClearActionButton, TodoAddContainer, TodoListContainer, TodoInputBox, TodoH1, ClearDiv, CounterP } from './todoListElements.js'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
    const [todos, setTodos] = useState([])
    const todoNameRef = useRef()

    //Creating local storage for saving todos array
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTodos) setTodos(storedTodos)
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    //Adding functionality for toggling the checkbox 
    function toggleTodo(id) {
        const newTodos = [...todos]
        const todo = newTodos.find(todo => todo.id === id)
        todo.complete = !todo.complete
        setTodos(newTodos)
    }

    //Clearing completed todo list items from the array
    function handleClearTodos() {
        const newTodos = todos.filter(todo => !todo.complete)
        setTodos(newTodos)
    }


    //Adding new todo based on user input and giving it a random id
    function handleAddTodo(e) {
        const name = todoNameRef.current.value
        if (name === '') return
        setTodos(prevtodos => {
            return [...prevtodos, { id: uuidv4(), name: name, complete: false }]
        })
        todoNameRef.current.value = null
    }



    return (
        <>
        <Navbar />
            <TodoWrap>
                <TodoContainer>
                    <TodoH1>TO-DO</TodoH1>
                    {/* Top container */}
                    <TodoAddContainer>
                        <TodoInputBox ref={todoNameRef} type="text" placeholder='new task' />
                        <AddActionButton onClick={handleAddTodo}>Add</AddActionButton>
                    </TodoAddContainer>

                    {/* Bottom container */}
                    <TodoListContainer>
                        <TodoList todos={todos} toggleTodo={toggleTodo} />
                    </TodoListContainer>
                    <ClearDiv>
                        <CounterP>{todos.filter(todo => !todo.complete).length} left todo </CounterP>
                        <ClearActionButton onClick={handleClearTodos}>Clear</ClearActionButton>
                    </ClearDiv>


                </TodoContainer>
            </TodoWrap>

        </>
    )
}

export default App;