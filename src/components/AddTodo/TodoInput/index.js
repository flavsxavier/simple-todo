import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createTodo } from '../../../store/ducks/todo';

import { Input } from './styles';

function TodoInput({ createTodo }) {
	function keyPress(e) {
		if (e.keyCode === 13) {
			createTodo(e.target.value);
			e.target.value = '';
		}
	}

	return (
		<Input
			type="text"
			placeholder="Dar star no repositório deste projeto..."
			onKeyDown={keyPress}
		/>
	);
}

const mapDispatchToProps = (dispatch) =>
	bindActionCreators({ createTodo }, dispatch);

export default connect(null, mapDispatchToProps)(TodoInput);
