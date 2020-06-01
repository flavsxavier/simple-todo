import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './styles';

function ThemeSwitcher({ theme, toggleTheme }) {
	const [checked, setChecked] = useState(false);

	useEffect(() => {
		if (theme === 'dark') setChecked(true);
		else setChecked(false);
	}, [checked, theme]);

	function handleToggleSwitch(e) {
		toggleTheme(theme === 'dark' ? 'light' : 'dark');
	}

	return (
		<ThemeToggle>
			<label className="label">
				<div className="toggle">
					<input
						className="toggle-state"
						type="checkbox"
						name="check"
						value="check"
						onChange={handleToggleSwitch}
						checked={checked}
					/>
					<div className="toggle-inner">
						<div className="indicator"></div>
					</div>
					<div className="active-bg"></div>
				</div>
			</label>
			<span>{theme === 'light' ? 'Tema claro' : 'Tema escuro'}</span>
		</ThemeToggle>
	);
}

export default ThemeSwitcher;
