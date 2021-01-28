export const getFilter = state => state.todos.filter;
export const getTodos = state => state.todos.items;

export const getVisibleTodos = state => {
  console.log(state);
  const allTodos = getTodos(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return allTodos.filter(({ text }) =>
    text.toLowerCase().includes(normalizedFilter),
  );
};
