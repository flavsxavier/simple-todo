import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useDrag } from 'react-dnd';

import { doneTodo, restoreTodo } from 'store/ducks/todo';

import { Container } from './styles';

function TodoItem({
  name,
  type,
  itemKey,
  todo,
  children,
  doneTodo,
  restoreTodo,
}) {
  const [{ isDragging }, dragRef] = useDrag({
    item: { type },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        if (type === 'todo') doneTodo(todo);

        if (type === 'done') restoreTodo(todo);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  if (type === 'non-draggable')
    return <Container className={type}>{children}</Container>;

  return (
    <Container
      key={itemKey}
      ref={dragRef}
      className={isDragging ? `${type} dragging` : type}
    >
      {children}
    </Container>
  );
}

TodoItem.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  itemKey: PropTypes.string,
  todo: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

TodoItem.defaultProps = {
  name: '',
  type: 'todo',
  itemKey: '1',
  todo: {},
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ doneTodo, restoreTodo }, dispatch);

export default connect(null, mapDispatchToProps)(TodoItem);
