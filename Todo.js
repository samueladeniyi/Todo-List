import React from 'react'


function Todo({todo, toggleTodo}) {

function handleTodoClick(){
 toggleTodo(todo.id)
}

    return (
        <div>
            <label style={{fontSize:'1.5rem'}}>
            <input style={{marginLeft:'150px', }} type='checkbox' checked={todo.complete} onChange={handleTodoClick}/>
            {todo.name}

            </label>
        </div>
    )
}

export default Todo;
