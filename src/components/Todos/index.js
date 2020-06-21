import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  RiCheckLine,
  RiDeleteBinLine,
  RiArrowGoBackLine,
} from 'react-icons/ri';

import { deleteTodo, doneTodo, restoreTodo } from 'store/ducks/todo';

import Emoji from 'components/Emoji';
import TodoItem from './TodoItem';
import TodoList from './TodoList';

import { TodoContainer, TodoHeader } from './styles';

function Todos({ todos, doneTodos, deleteTodo, doneTodo, restoreTodo }) {
  return (
    <div className="container">
      <TodoContainer>
        <TodoHeader>
          <h1>
            <Emoji emoji="🔨" label="Hammer" /> A fazer
          </h1>
        </TodoHeader>
        <TodoList name="todoList" accept="done">
          {todos.length === 0 && (
            <TodoItem type="non-drag">
              <h1>
                Você não tem nenhuma tarefa{' '}
                <Emoji emoji="😴" label="Sleeping" />
              </h1>
            </TodoItem>
          )}
          {todos.length > 0 &&
            todos.map((todo) => (
              <TodoItem key={todo.id} type="todo" todo={todo}>
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
          <h1>
            <Emoji emoji="✔️" label="Check" /> Feito
          </h1>
        </TodoHeader>
        <TodoList name="doneList" accept="todo">
          {doneTodos.length === 0 && (
            <TodoItem type="non-drag">
              <h1>
                Não há tarefas realizadas <Emoji emoji="😕" label="Confused" />
              </h1>
            </TodoItem>
          )}
          {doneTodos.map((todo) => (
            <TodoItem key={todo.id} type="done" todo={todo}>
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
