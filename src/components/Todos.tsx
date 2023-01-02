import React from "react";
import useTodos from "./hooks/useTodos";
import TodoItem from "./TodoItem";

const Todos: React.FC = () => {
  const { items, removeTodo } = useTodos();

  return (
    <ul>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={removeTodo.bind(null, item.id)}
          // onRemoveTodo={() => removeTodo(item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
