export default function changeColor(color) {
	return {
		text: `text-${color}-dark`,
		bg: `bg-${color}-dark`,
		border: `border-${color}-dark`,
		outline: `outline-${color}-dark`,
	};
}
