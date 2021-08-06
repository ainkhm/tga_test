import { useState, useEffect } from 'react';

export default function useLayout() {
	const [showLayout, setShowLayout] = useState(true);

	useEffect(() => {
		setShowLayout(true);
	}, []);

	return showLayout;
}
