import types from '../constants/';

export const initialState = {
  todos: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SUBMIT_TODO:
      return {
        ...state, // returns the unpacked state
        todos: [ // overwrite todos array with this modified array
          ...state.todos,
          { // add the submitted object to this array
            id: action.id,
            text: action.text,
          },
        ],
      };
    default:
      return state;
  }
};

export default reducer;
