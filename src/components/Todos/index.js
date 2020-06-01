import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { deleteTodo, doneTodo, restoreTodo } from '../../store/ducks/todo';

import {
	RiCheckLine,
	RiDeleteBinLine,
	RiArrowGoBackLine,
} from 'react-icons/ri';

import { TodoContainer, TodoList, TodoItem, TodoHeader } from './styles';

function Todos({ todos, doneTodos, deleteTodo, doneTodo, restoreTodo }) {
	return (
		<div className="container">
			<TodoContainer>
				<TodoHeader>
					<h1>A fazer</h1>
				</TodoHeader>
				<TodoList>
					{todos.length === 0 && (
						<TodoItem>
							<h1>Você não tem nenhuma tarefa :)</h1>
						</TodoItem>
					)}
					{todos.length > 0 &&
						todos.map((todo) => (
							<TodoItem key={todo.id}>
								<h1>{todo.title}</h1>
								<div className="actions">
									<div className="delete" onClick={() => deleteTodo(todo.id)}>
										<RiDeleteBinLine />
									</div>
									<div className="done" onClick={() => doneTodo(todo)}>
										<RiCheckLine />
									</div>
								</div>
							</TodoItem>
						))}
				</TodoList>
			</TodoContainer>

			{/* Done To-Do's */}
			<TodoContainer>
				<TodoHeader>
					<h1>Feito</h1>
				</TodoHeader>
				<TodoList className="done-todos">
					{doneTodos.length === 0 && (
						<TodoItem>
							<h1>Não há tarefas realizadas :o</h1>
						</TodoItem>
					)}
					{doneTodos.map((todo) => (
						<TodoItem key={todo.id}>
							<h1>{todo.doneTodo.title}</h1>
							<div className="actions">
								<div className="restore" onClick={() => restoreTodo(todo)}>
									<RiArrowGoBackLine />
								</div>
							</div>
						</TodoItem>
					))}
				</TodoList>
			</TodoContainer>
		</div>
	);
}

const mapStateToProps = (state) => ({
	todos: state.todo.todos,
	doneTodos: state.todo.doneTodos,
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators({ deleteTodo, doneTodo, restoreTodo }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
