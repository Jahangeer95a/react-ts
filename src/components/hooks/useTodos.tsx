import React from "react";
import { TodosContext } from "../context/todos-context";

const useTodos = () => {
  return React.useContext(TodosContext);
};

export default useTodos;
