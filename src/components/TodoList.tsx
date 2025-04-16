import { useState } from "react";
import { Todo } from "../pages/Home";

interface Props {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList = ({ todos, addTodo, toggleTodo, deleteTodo }: Props) => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") {
      setError("Todo cannot be empty.");
      return;
    }
    addTodo(text.trim());
    setText("");
    setError("");
  };

  return (
    <div className="mb-4">
      <div className={`flex gap-2 ${error ? "mb-1" : "mb-6"}`}>
        <input
          className="flex-1 p-2 border rounded"
          placeholder="New todo..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            if (e.target.value.trim() !== "") {
              setError("");
            }
          }}
        />
        <button
          className="bg-green-600 text-white w-24 py-1 rounded"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <ul>
        <li className="flex justify-between items-center mb-3 font-semibold border-b border-gray-300 pb-2">
          <span className="w-[33%] flex justify-start">Todo</span>
          <span className="w-[33%] flex justify-center">Status</span>
          <span className="w-[33%] flex justify-end">Action</span>
        </li>
        {todos.length === 0 && (
          <li className="text-gray-500 text-center py-2">No todos available</li>
        )}
        {todos.map((t) => (
          <li
            key={t.id}
            className="flex justify-between items-center mb-2 py-1"
          >
            <span className="w-[33%] flex justify-start">{t.text}</span>
            <span className="w-[33%] flex justify-center">
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => toggleTodo(t.id)}
                className="cursor-pointer"
              />
            </span>
            <button
              onClick={() => deleteTodo(t.id)}
              className="text-red-500 hover:underline w-[33%] flex justify-end"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
