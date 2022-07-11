import { createContext, useReducer } from 'react';
import { themeReducer } from './reducer';

export const ThemeContext = createContext();

const INITIAL_STATE = { darkMode: true };

export const ThemeProvider = ({ children }) => {
	const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

	return (
		<ThemeContext.Provider value={{ state, dispatch }}>
			{children}
		</ThemeContext.Provider>
	);
};
