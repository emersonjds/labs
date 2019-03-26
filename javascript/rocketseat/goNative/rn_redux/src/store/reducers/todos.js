INITIAL_STATE = [
  {
    id: 0,
    text: "Fazer café",
    completed: false
  },
  {
    id: 1,
    text: "Estudar Native",
    completed: false
  },

  {
    id: 2,
    text: "Estudar Native",
    completed: false
  },
  {
    id: 3,
    text: "cozinhar",
    completed: false
  },
  {
    id: 4,
    text: "Corrigir bugs",
    completed: false
  }
];

//Reducer
function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Math.random(), text: action.payload.text, completed: false }
      ];
    case "MARK_AS_COMPLETED":
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
}

export default todos;
