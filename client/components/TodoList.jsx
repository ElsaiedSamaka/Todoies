import TodoItem from "./TodoItem";

const TodoList = ({ todoslist }) => {
  const topList = todoslist.slice(0, 5);
  return topList.map((todo, i) => <TodoItem key={i} todo={todo} />);
};
export default TodoList;
