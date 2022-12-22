import { useState } from "react";
import ToDo from "./toDo";
import "./toDoApp.css";

export default function ToDoApp() {

    const [title, setTitle] = useState("");
    const [todos, setTodos] = useState([]);

    function handleChange(event){
        const value = event.target.value;

        setTitle(value);

    }

    function handleSubmit(event){
        event.preventDefault();

        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false,
        };

        setTodos([...todos, newTodo]);

        setTitle("");
    }

    function handleUpdate (id, value){
        const temp = [...todos];
        const element = temp.find(element => element.id === id);
        element.title = value;
        setTodos(temp);

    }

    function handleDelete(id){
        const temp = todos.filter(element => element.id !== id);
        setTodos(temp);


    }

    return (
    <div className="todoContainer">
        <form className="todoCreateForm" onSubmit={handleSubmit}>
            <input onChange={handleChange} className="todoInput" value={title}/>
            <input onClick={handleSubmit} type="submit" value="Crear Tarea" className="buttonCreate"/>
        </form>

        <div className="todosContainer">
            {
                todos.map(element => (
                    <ToDo key={element.id} element={element} onUpdate={handleUpdate} onDelete={handleDelete}/>
                ))
            }
        </div>
    </div>
    );
}