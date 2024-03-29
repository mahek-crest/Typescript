import { useRef } from "react";
import "../App.css";

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    // console.log(enteredText);
    props.onAddTodo(enteredText);
  };

  return (
    <>
      <form onSubmit={todoSubmitHandler}>
        <div className="form-control">
          <label htmlFor="todo-text">Enter Todo</label>
          <input type="text" id="todo-text" ref={textInputRef} />
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
};

export default NewTodo;
