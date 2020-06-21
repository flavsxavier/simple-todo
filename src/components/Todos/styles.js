import styled from 'styled-components';

export const TodoContainer = styled.section`
  max-height: 400px;
  margin-bottom: 15px;
  padding: 5px;
  background-color: ${({ theme }) => theme.todosContainer.bg};
  overflow-y: auto;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2), 0px 1px 10px rgba(0, 0, 0, 0.14),
    0px 4px 5px rgba(0, 0, 0, 0.12);
`;

export const TodoHeader = styled.div`
  h1 {
    margin: 0 0 10px;
    font-size: 24px;
    color: ${({ theme }) => theme.todosContainer.text};
  }
`;
