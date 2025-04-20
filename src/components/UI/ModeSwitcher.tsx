/* eslint-disable react-hooks/exhaustive-deps */
import { disable as disableDarkMode, enable as enableDarkMode } from 'darkreader';
import { useContext, useEffect } from 'react';
import { Context } from '../../Context';

export default function ModeSwitcher() {
	const { darkMode, setDarkMode } = useContext(Context);

	useEffect(() => {
		if (darkMode) {
			enableDarkMode(
				{
					brightness: 100,
					contrast: 100,
				},
				{
					css: '',
					disableStyleSheetsProxy: false,
					invert: ['.resume-link'],
					ignoreInlineStyle: [],
					ignoreImageAnalysis: ['.resume'],
				},
			);
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
				<i className="fa fa-sun-o" aria-hidden="true"></i>
			) : (
				<i className="fa fa-moon-o" aria-hidden="true"></i>
			)}
		</div>
	);
}
