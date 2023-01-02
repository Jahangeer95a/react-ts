import React from "react";
import Todo from "../models/todo";

type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
  };

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
});

// For props.children <React.Props.WithChildren> or <{children: React.ReactNode}>

const TodosContextProvider: React.FC<React.PropsWithChildren> = (props) => {
  const [todos, setTodos] = React.useState<Todo[]>([
    new Todo("Learn React"),
    new Todo("Learn Typescript"),
  ]);
  const addTodoHandler = (todoText: string) => {
    // setTodos([...todos, new Todo(todoText)]);
    return setTodos((prevtodos) => prevtodos.concat(new Todo(todoText)));
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== todoId));
  };
  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
