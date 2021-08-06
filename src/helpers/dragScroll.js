export function DragScroll(element) {
	element.style.cursor = 'grab';
	let pos = { top: 0, left: 0, x: 0, y: 0 };
	const mouseDownHandler = (e) => {
		element.style.cursor = 'grabbing';
		element.style.userSelect = 'none';
		pos = {
			left: element.scrollLeft,
			top: element.scrollTop,
			x: e.clientX,
			y: e.clientY,
		};
		document.addEventListener('mousemove', mouseMoveHandler);
		document.addEventListener('mouseup', mouseUpHandler);
	};
	const mouseMoveHandler = (e) => {
		const dx = e.clientX - pos.x;
		const dy = e.clientY - pos.y;
		element.scrollTop = pos.top - dy;
		element.scrollLeft = pos.left - dx;
	};
	const mouseUpHandler = () => {
		element.style.cursor = 'grab';
		element.style.removeProperty('user-select');
		document.removeEventListener('mousemove', mouseMoveHandler);
		document.removeEventListener('mouseup', mouseUpHandler);
	};

	element.addEventListener('mousedown', mouseDownHandler);
}
