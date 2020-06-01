import styled from 'styled-components';

export const AddTodoContainer = styled.div`
	position: relative;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	padding: 5px;
	background-image: linear-gradient(
		to right,
		${({ theme }) => theme.siteGradient[0]},
		${({ theme }) => theme.siteGradient[1]}
	);
	border-radius: 4px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2), 0px 1px 10px rgba(0, 0, 0, 0.14),
		0px 4px 5px rgba(0, 0, 0, 0.12);
	z-index: 1;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(
			to right,
			var(--gradient-primary),
			var(--gradient-secondary)
		);
		opacity: 0;
		transition: opacity 0.3s;
		z-index: -1;
		border-radius: 4px;
	}

	&:hover::before,
	&:focus::before {
		opacity: 1;
	}
`;
