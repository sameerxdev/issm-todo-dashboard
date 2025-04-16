import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import TodoList from "../components/TodoList";
import FilterBar from "../components/FilterBar";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Home = () => {
  const { isLoggedIn, username, logout, loading } = useAuth();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "completed" | "incomplete">(
    "all"
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      navigate("/");
    }
    const stored = localStorage.getItem("todos");
    if (stored) setTodos(JSON.parse(stored));
  }, [isLoggedIn, navigate, loading]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  if (loading) return null;

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const filteredTodos = todos.filter((t) =>
    filter === "all"
      ? true
      : filter === "completed"
      ? t.completed
      : !t.completed
  );

  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const incomplete = total - completed;

  const pieData = [
    { name: "Completed", value: completed },
    { name: "Incomplete", value: incomplete },
  ];

  const COLORS = ["green", "red"]; // green & red

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Todo Dashboard</h1>
        <div className="flex items-center gap-6">
            <p className="text-base font-semibold">Welcome, {username}</p>
            <button
          onClick={() => {
            logout();
            localStorage.setItem("todos", JSON.stringify([]));
            setTodos([]);
            navigate("/");
          }}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
        </div>
        
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2 bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-bold mb-2">Analytics</h2>
          {todos.length > 0 ? (
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          ) : null}
          <div className="mt-4 space-y-1">
            <p>Total: {total}</p>
            <p>Completed: {completed}</p>
            <p>Incomplete: {incomplete}</p>
          </div>
        </div>

        {/* Right: Filter + Todos */}
        <div className="md:w-1/2 bg-white rounded-lg shadow p-4">
          <FilterBar filter={filter} setFilter={setFilter} />
          <TodoList
            todos={filteredTodos}
            addTodo={addTodo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
