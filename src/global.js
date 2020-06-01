import { createGlobalStyle } from 'styled-components';

import SourceSansPro from './assets/fonts/souce-sans-pro/SourceSansPro-Regular.ttf';

export default createGlobalStyle`
	@font-face {
		font-family: 'Source Sans Pro';
		src: url(${SourceSansPro});
	}

	:root {
		--primary: #3376cc;
		--gradient-primary: #2367e2;
		--gradient-secondary: #439dea;
		--gray: #222324;
		--gray-light-1: #303233;
		--gray-light-2: #5e6163;
		--gray-light-3: #5e6163;
		--gray-light-6: #CED2D9;
		--gray-light-8: #f0f3f7;
		--gray-light-9: #f5f8fc;
		--delete: #d50000;
		--delete-dark: #9b0000;
		--done: #00c853;
		--done-dark: #009624;
	}

	::-webkit-scrollbar {
		width: 0.5em;
		height: 0.5em;
	}
	::-webkit-scrollbar-thumb {
		background: var(--gray-light-3);
	}
	::-webkit-scrollbar-track {
		background: var(--gray-light-9);
		border-radius: 0 4px 4px 0;
	}

	body {
		margin: 0;
		padding: 0;
		font-family: 'Source Sans Pro';
	}

	ul {
		margin: 0;
		padding: 0;
	}
	ul li {
		list-style: none;
	}

	main.main-content {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		background-image: linear-gradient(
			to right,
			${({ theme }) => theme.siteGradient[0]},
			${({ theme }) => theme.siteGradient[1]}
		);
	}

	div.container {
		width: 100%;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-evenly;
	}

	div.addTodo-theme-section {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
		margin: 30px 0 15px;
	}
`;
