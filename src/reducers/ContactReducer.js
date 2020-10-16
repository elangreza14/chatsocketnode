export const ContactReducer = (action, state) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: action.id, id: action.name }];
    default:
      return state;
  }
};
