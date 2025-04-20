/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from 'react';

export const contextInitialValues = {
	darkMode: null,
	setDarkMode: (_: boolean) => {},
}

export const Context = createContext<{ darkMode: boolean | null; setDarkMode: (v: boolean) => void }>(contextInitialValues);
