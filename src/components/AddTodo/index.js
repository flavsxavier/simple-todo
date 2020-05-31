import React from 'react';

import TodoInput from './TodoInput';

import { AddTodoContainer } from './styles';

function AddTodo() {
	return (
		<AddTodoContainer>
			<TodoInput />
		</AddTodoContainer>
	);
}

export default AddTodo;
