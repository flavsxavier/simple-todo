import styled from 'styled-components';

export const Input = styled.input`
	width: 30rem;
	height: 4rem;
	padding: 0 1rem;
	background-color: ${({ theme }) => theme.addTodoInput.bg};
	color: ${({ theme }) => theme.addTodoInput.text};
	border-width: 4px;
	border: none;
	outline: none;
	font: 1.4em 'Source Sans Pro';
	transition: box-shadow 0.3s;

	&:hover {
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2), 0px 1px 10px rgba(0, 0, 0, 0.14),
			0px 4px 5px rgba(0, 0, 0, 0.12);
	}

	&:focus {
		outline: none;
	}
`;
