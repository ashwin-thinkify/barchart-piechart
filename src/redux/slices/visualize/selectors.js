export const getTimelinePublication = store => {
  const {timelinePublication} = store.todos;
  return timelinePublication;
};
export const getAuthorPublication = store => {
  const {authorPublication} = store.todos;
  return authorPublication;
};

export const getBarChart = (store) => {
  const allTodos = getTimelinePublication(store);
  return allTodos;
};

export const getPieChart = (store) => {
  const allTodos = getAuthorPublication(store);
  return allTodos;
};
