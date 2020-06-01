import styled from 'styled-components';

export const ThemeToggle = styled.div`
	display: flex;
	flex-flow: column wrap;
	align-items: center;
	padding-left: 15px;

	.label {
		display: inline-flex;
		align-items: center;
		cursor: pointer;
	}

	.toggle {
		isolation: isolate;
		position: relative;
		height: 32px;
		width: 62px;
		border-radius: 15px;
		background-color: var(--gray-light-6);
		overflow: hidden;
	}

	.toggle-inner {
		z-index: 2;
		position: absolute;
		top: 1px;
		left: 1px;
		height: 30px;
		width: 60px;
		border-radius: 30px;
		overflow: hidden;
	}

	.active-bg {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 200%;
		background-image: linear-gradient(
			to right,
			var(--gray),
			var(--gray-light-2)
		);
		transform: translate3d(-100%, 0, 0);
		transition: transform 0.05s linear 0.17s;
	}

	.toggle-state {
		display: none;
	}

	.indicator {
		height: 100%;
		width: 200%;
		background: white;
		border-radius: 15px;
		transform: translate3d(-75%, 0, 0);
		transition: transform 0.35s cubic-bezier(0.85, 0.05, 0.18, 1.35);
	}

	.toggle-state:checked ~ .active-bg {
		transform: translate3d(-50%, 0, 0);
	}

	.toggle-state:checked ~ .toggle-inner .indicator {
		transform: translate3d(25%, 0, 0);
	}

	span {
		font-weight: bold;
		color: ${({ theme }) => theme.switcherText};
		margin-top: 5px;
	}
`;
