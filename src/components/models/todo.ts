const key = () => {
  return Math.floor(Math.random() * 1000 + 88);
};

class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.id = `${key()}-${key()}`;
    this.text = todoText;
  }
}

export default Todo;
