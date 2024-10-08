import './styles/index.scss';

import Main from './components/Main/Main';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Main />
	</StrictMode>
);
