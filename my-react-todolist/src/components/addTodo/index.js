import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({ submitTodo }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault(); // don't reload the page as default behaviour
          submitTodo(input.value);
          input.value = '';
        }}
      >

        <input
          className="todo-input"
          ref={(element) => { // save a reference to this element
            input = element;
          }}
        />

        <button type="submit" className="todo-submit">
            Add Todo
        </button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  submitTodo: PropTypes.func.isRequired,
};

export default AddTodo;
