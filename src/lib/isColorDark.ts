export const isColorDark = (initialColor: string) => {
	// If hex --> Convert it to RGB: http://gist.github.com/983661
	const color = +(`0x${initialColor.slice(1).replace(initialColor.length < 5 && /./g, "$&$&")}`);

	const red = color >> 16;
	const green = (color >> 8) & 255;
	const blue = color & 255;

	const hsp = Math.sqrt(0.299 * (red * red) + 0.587 * (green * green) + 0.114 * (blue * blue));

	return hsp < 127.5;
};
