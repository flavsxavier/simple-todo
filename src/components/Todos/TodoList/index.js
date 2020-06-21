import React from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';

import { Container } from './styles';

function TodoList({ name, accept, children }) {
  const [{ isOver }, dropRef] = useDrop({
    accept,
    drop: () => ({ name }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });
  return (
    <Container ref={dropRef} isOver={isOver}>
      {children}
    </Container>
  );
}

TodoList.propTypes = {
  name: PropTypes.string,
  accept: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

TodoList.defaultProps = {
  name: '',
  accept: 'todo',
};

export default TodoList;
