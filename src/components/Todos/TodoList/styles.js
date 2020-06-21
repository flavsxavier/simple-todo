import styled from 'styled-components';

export const Container = styled.ul`
  width: 32rem;
  transition: box-shadow 0.3s;

  box-shadow: ${(props) =>
    props.isOver &&
    '0px 2px 4px rgba(0, 0, 0, 0.2), 0px 1px 10px rgba(0, 0, 0, 0.14),0px 4px 5px rgba(0, 0, 0, 0.12);'};
`;
