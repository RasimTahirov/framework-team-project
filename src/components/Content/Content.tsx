import { useState } from 'react';
import { Gallery } from './Gallery/Gallery';
import { TPainting } from './types/types';

export const Content = () => {
	const [paintings, setPaintings] = useState<TPainting[]>([]);

	return (
		<div>
			<Gallery paintings={paintings} setPaintings={setPaintings} />
		</div>
	);
};

