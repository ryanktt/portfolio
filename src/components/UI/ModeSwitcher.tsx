import { disable as disableDarkMode, enable as enableDarkMode } from 'darkreader';
import { useEffect, useState } from 'react';

export default function ModeSwitcher() {
	const [darkMode, setDarkMode] = useState<boolean>(false);
	useEffect(() => {
		if (darkMode) {
			enableDarkMode({
				brightness: 100,
				contrast: 100,
			});
		} else {
			disableDarkMode();
		}
	}, [darkMode]);

	useEffect(() => {
		if (window.matchMedia) {
			setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
		}
	}, []);

	return (
		<div className="mode-switcher" onClick={() => setDarkMode(!darkMode)}>
			{darkMode ? (
				<i className="fa fa-moon-o" aria-hidden="true"></i>
			) : (
				<i className="fa fa-sun-o" aria-hidden="true"></i>
			)}
		</div>
	);
}
