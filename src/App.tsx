import React from 'react';
import s from './App.modules.scss';
import './custom.css';
import clx from 'classnames';

import About from './About';

const App = () => {
	return (
		<>
			<div className={clx(s.header, 'color')}>
				Hello, this is App Component!!!
			</div>
			<About />
		</>
	);
};

export default App;
