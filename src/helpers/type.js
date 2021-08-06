const typeToString = (type) => {
	let typeString;
	switch (type) {
		case 0:
			typeString = 'Mobile App';
			break;
		case 1:
			typeString = 'Web App';
			break;
		case 2:
			typeString = 'Desktop App';
			break;
	}
	return typeString;
};

export default typeToString;
