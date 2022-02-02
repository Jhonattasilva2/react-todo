function Form({ inputText, setInputText, todos, setTodos }) {


  function inputTextHandler(e) {
    setInputText(e.target.value);
  }

  function submitTodoHandler(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  }


  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        Adicionar
      </button>
    </form>
  );
}

export default Form;
