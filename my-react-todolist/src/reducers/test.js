/* global expect, it, describe */

import types from '../constants';
import { reducer, initialState } from '.';

describe('Reducer', () => {
  const todoText = 'A todo';

  it('should return the initial state when no action is passed', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('Submit todo', () => {
    const action = {
      type: types.SUBMIT_TODO,
      id: 1,
      text: todoText,
    };

    const expectedState = {
      todos: [
        {
          id: 1,
          text: todoText,
        },
      ],
    };

    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});
