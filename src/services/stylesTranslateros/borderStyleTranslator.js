const PX = 'px';
const SOLID = 'solid';

export function translate(style) {
	var borderData = style.border;

	var translatedStyle = {
		'border-color': borderData.color,
		'border-style': SOLID
	};

	var weight = borderData.weight;

	if (weight) {
		translatedStyle['border-width'] = weight + PX;
	}

	return translatedStyle;
}