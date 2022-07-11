import React from 'react'
import { TodoInput, TodoItemContainer, TodoHr, LabelStyle } from './todoListElements'

export default function Todo({ todo, toggleTodo }) {

    function handleTodoClick() {
        toggleTodo(todo.id)
    }

    return (
        <TodoItemContainer>
            <LabelStyle todo={todo.complete} >
                <TodoInput type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
                {todo.name}
            </LabelStyle>
            <TodoHr />
        </TodoItemContainer>
    )
}