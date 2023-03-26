import { useState } from "react";

export default function ToDo({element, onUpdate, onDelete}){

    const [isEdit, setIsEdit] = useState(false);

    function FormEdit(){

        const [newValue, setNewValue] = useState(element.title);
        function handleSubmit(event){
            event.preventDefault();
        }

        function handleChange(event){
            const value = event.target.value;
            setNewValue(value);
        }

        function handleClick(){
            onUpdate(element.id, newValue);
            setIsEdit(false);
        }

        return <form className="todoUpdateForm" onSubmit={handleSubmit}>
            <input type="text" className="todoInput" onChange={handleChange} value={newValue}/>
            <button className="button" onClick={handleClick}>Actualizar</button>
        </form>
    }

    function TodoElement(){
        return (
            <div className="todoInfo">
                <span className="text">{element.title}</span>
                <button className="button" onClick={() => setIsEdit(true)}>Editar</button>
                <button className="buttonDelete" onClick={(event) => onDelete(element.id)}>Eliminar</button>
            </div>
            )

    }

    return (
    <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}
    </div>
        
    
    )
}