export default function calcBgNo(i, bgTotal) {
	return (i + 1) % bgTotal === 0 ? bgTotal : (i + 1) % bgTotal;
}
