import React, { useState } from 'react';
import Footer from './Footer.jsx'; // Import Footer component
import './TodoList.css';

const TodoList = () => {
  
    // State to store all todo sections (each with a heading and associated lists)
    const [todos, setTodos] = useState([]);

    // State to manage the current heading input
    const [headingInput, setHeadingInput] = useState('');

    // State to manage each input field for the nested list items by heading index
    const [listInputs, setListInputs] = useState({});
    
    // Function to add a new todo heading (if input is not empty)
    const handleAddTodo = () => {
        if (headingInput.trim() !== '') {
            // Append new todo with empty list array
            setTodos([...todos, { heading: headingInput, lists: [] }]);
            setHeadingInput(''); // Clear the input field
        }
    };
    
    // Function to delete a todo section based on index
    const handleDeleteTodo = (index) => {
        const newTodos = [...todos];       // Create a copy of current todos
        newTodos.splice(index, 1);         // Remove the selected heading
        setTodos(newTodos);                // Update state with modified list
    };

    const handleDeleteListInput = (todoIndex, listIndex) => {
        const newTodos = [...todos];               // Create a copy of current todos
        newTodos[todoIndex].lists.splice(listIndex, 1); // Remove the selected list item
        setTodos(newTodos);                        // Update state with modified list
    }
    
    // Function to add a new list item under a specific heading
    const handleAddList = (index) => {
    // Check if the input for the given index is not empty or just whitespace
      if (listInputs[index] && listInputs[index].trim() !== '') {
          const newTodos = [...todos];                   // Create a copy of the current todos array
          newTodos[index].lists.push(listInputs[index]); // Add the new list item to the corresponding heading's list
         setTodos(newTodos);                             // Update the todos state with the new list item
         setListInputs({ ...listInputs, [index]: '' });  // Clear the input field for that index
      }
    };
    // Function to update list input value for a specific heading index
    const handleListInputChange = (index, value) => {
      setListInputs({ ...listInputs, [index]: value }); // Update the listInputs state for the corresponding index
    };  


  return (
    <>
      <div className="todo-container">
        <h1 className="title">JJ's Todo List</h1>
        <div className="input-container"> {/* Input field to enter a new heading */}
          <input
            type="text"
            className="heading-input"// CSS class for styling
            placeholder="Enter heading"
            value={headingInput}
            onChange={(e)=>{setHeadingInput(e.target.value);}} // Add onChange event handler to update headingInput state
          />
          <button className="add-list-button" onClick={handleAddTodo} >Add Heading</button>
        </div>
      </div>
            {/* Main section displaying all todos */}
            <div className="todo_main">
                {todos.map((todo, index) => (
                    <div key={index} className="todo-card">
                        <div className="heading_todo">
                            <h3>{todo.heading}</h3> {/* Display heading */}
                            <button
                                className="delete-button-heading"
                                onClick={() => handleDeleteTodo(index)}
                            >
                                Delete Heading
                            </button>
                        </div>
                        {/* Render all list items under this heading */}
                        <ul>
                            {todo.lists.map((list, listIndex) => (
                                <li key={listIndex} className='todo_inside_list'>
                                    <p>{list}</p> {/* Display individual list item */}
                                    <button
                                        className="delete-button-list"
                                        onClick={() => handleDeleteListInput(index, listIndex)}
                                    >
                                        Done
                                    </button>
                                </li>
                            ))}
                        </ul>
                        {/* Input section to add list item under this heading */}
                        <div className='add_list'>
                            <input
                                type="text"
                                className="list-input"
                                placeholder="Add List"
                                value={listInputs[index] || ''} // Maintain controlled input
                                onChange={(e) => handleListInputChange(index, e.target.value)} // Update list input value
                            />
                            <button
                                className="add-list-button"
                                onClick={() => handleAddList(index)}
                            >
                                Add List
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <Footer /> {/* Render Footer component */}  
        </>
    );
};
export default TodoList;
