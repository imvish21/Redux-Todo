export const AddTodoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos }
  } = getState();

  const hasTodo = todos.find((item) => item.todo === todo);
  if (!hasTodo && todo !== "") {
    dispatch({
      type: "ADD_TODO",
      payload: [{ id: todo, todo }, ...todos],
    });
  }
};

export const RemoveTodoAction = (todo) => (dispatch, getState) => {
    const {Todo: {todos}} = getState();
    dispatch({
        type: "REMOVE_TODO",
        payload: todos.filter((item)=> item.id !== todo.id),
    })
}
