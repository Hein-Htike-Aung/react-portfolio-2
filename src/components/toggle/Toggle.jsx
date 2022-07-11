import React, { useContext } from 'react';
import { ThemeContext } from '../../context/context';
import Moon from '../../img/moon.png';
import Sun from '../../img/sun.png';
import './toggle.scss';

const Toggle = () => {
	const theme = useContext(ThemeContext);

	const handleToggle = () => {
		theme.dispatch({ type: 'TOGGLE' });
	};

	return (
		<div className='t'>
			<img className='t-icon' src={Sun} alt='' />
			<img className='t-icon' src={Moon} alt='' />
			<div
				className='t-button'
				onClick={handleToggle}
				style={{
					left: theme.state.darkMode ? '0' : '25px',
				}}
			></div>
		</div>
	);
};

export default Toggle;
