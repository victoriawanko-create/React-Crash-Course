import './Todo.css'

function Todo({ title, onToDoDelete }) {
    function deleteTodo (id) {
        console.log('deleteTodo', title.toUpperCase())
    }
    return (
    <div className="todo">
        <p>{title}</p>
        <button onClick={onToDoDelete}>Delete</button>
    </div>
    );
 }

 export default Todo;