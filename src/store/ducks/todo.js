// Action Types
const Types = {
	CREATE_TODO: 'todo/CREATE_TODO',
	DELETE_TODO: 'todo/DELETE_TODO',
	DONE_TODO: 'todo/DONE_TODO',
	RESTORE_TODO: 'todo/RESTORE_TODO',
};

// Reducers
const initialState = {
	todos: [],
	doneTodos: [],
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case Types.CREATE_TODO:
			return {
				...state,
				todos: state.todos.concat({
					id: state.todos.length + 1,
					title: action.payload.name,
				}),
			};

		case Types.DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload.todoId),
			};

		case Types.DONE_TODO:
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload.todo.id),
				doneTodos: state.doneTodos.concat({
					id: state.doneTodos.length + 1,
					doneTodo: {
						id: action.payload.todo.id,
						title: action.payload.todo.title,
					},
				}),
			};

		case Types.RESTORE_TODO:
			return {
				...state,
				todos: state.todos.concat({
					id: state.todos.length + 1,
					title: action.payload.todo.doneTodo.title,
				}),
				doneTodos: state.doneTodos.filter(
					(todo) => todo.id !== action.payload.todo.id
				),
			};

		default:
			return state;
	}
}

// Action Creators
export function createTodo(name) {
	return {
		type: Types.CREATE_TODO,
		payload: {
			name,
		},
	};
}

export function deleteTodo(todoId) {
	return {
		type: Types.DELETE_TODO,
		payload: {
			todoId,
		},
	};
}

export function doneTodo(todo) {
	return {
		type: Types.DONE_TODO,
		payload: {
			todo,
		},
	};
}

export function restoreTodo(todo) {
	return {
		type: Types.RESTORE_TODO,
		payload: {
			todo,
		},
	};
}
