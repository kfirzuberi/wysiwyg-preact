const NORMAL = 'normal';
const PX = 'px';
const BOLD = 'bold';
const ITALIC = 'italic';
const UNDERLINE = 'underline';

const getAlignmentAdditionalProperties =(direction)=> {
	switch (direction) {
		case 'left':
			return getFlexProperties('flex-start', 'start');
		case 'right':
			return getFlexProperties('flex-end', 'end');
		default:
			return getFlexProperties('center', 'center');
	}
}

const getFlexProperties =(justifyContent, msFlexPack)=> {
	return {
		'justify-content': justifyContent,
		'-ms-flex-pack': msFlexPack
	};
}

export function translate(style) {
	var fontData = style.font;

	var translatedStyle = {
		'text-align': fontData.align,
		'font-weight': fontData.bold ? BOLD : NORMAL,
		color: fontData.color,
		'font-family': fontData.family,
		'font-style': fontData.italics ? ITALIC : NORMAL,
		'font-size': fontData.size + PX
	};

	translatedStyle = Object.assign(translatedStyle, getAlignmentAdditionalProperties(fontData.align));

	if (fontData.underline) {
		translatedStyle['text-decoration'] = UNDERLINE;
	}

	return translatedStyle;
}