const DEFAULT_OPACITY = 1;

const hexToRgba =(hex, alpha)=> {
	var h = hex.replace('#', '');
	var bigint = parseInt(h, 16);
	var r = (bigint >> 16) & 255;
	var g = (bigint >> 8) & 255;
	var b = bigint & 255;
	return '(' + r + ',' + g + ',' + b + ',' + alpha + ')';
}

export function translate(style) {
	var styleOpacity = style.opacity;
	var opacity = styleOpacity !== undefined ? styleOpacity : DEFAULT_OPACITY;

	return {
		'background-color': 'rgba' + hexToRgba(style.background, opacity)
	};
}