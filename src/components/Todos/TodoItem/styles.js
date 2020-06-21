import styled from 'styled-components';

export const Container = styled.li`
  height: 3rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.todo.bg};
  border-bottom: 3px solid var(--primary);
  border-radius: 4px;
  font-size: 1.4em;
  font-weight: bold;
  transition: box-shadow 0.3s, opacity 0.3s;

  opacity: ${(props) => props.isDragging && '0.5'};

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  &:hover {
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.2), 0px 3px 3px rgba(0, 0, 0, 0.14),
      0px 3px 4px rgba(0, 0, 0, 0.12);
  }

  &.done {
    border-color: var(--done);

    div.actions {
      justify-content: flex-end;
    }
  }

  &.non-drag {
    border-color: var(--gray-light-6);
  }

  h1 {
    margin: 0;
    font-size: 18px;
    color: ${({ theme }) => theme.todo.text};
  }

  div.actions {
    width: 4rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    div {
      display: inline-flex;
      cursor: pointer;

      &.delete:hover,
      &.restore:hover {
        svg {
          color: var(--delete-dark);
        }
      }
      svg {
        color: var(--gray-light-3);
        transition: all 0.3s;
      }

      &.done:hover svg {
        color: var(--done-dark);
      }
    }
  }
`;
