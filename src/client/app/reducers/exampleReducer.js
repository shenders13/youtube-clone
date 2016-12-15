const initialState = {
  text: 'text from redux store',
};

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EXAMPLE_ACTION_TYPE':
      return {
        text: action.text.text,
      };
    default: return state;
  }
};

export default exampleReducer;