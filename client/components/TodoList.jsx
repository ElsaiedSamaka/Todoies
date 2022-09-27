import TodoItem from "./TodoItem";

const TodoList = ({ todoslist }) => {
  return todoslist.map((todo, i) => <TodoItem key={i} todo={todo} />);
};
export default TodoList;
