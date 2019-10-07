const PX = 'px';
const SPACE = ' ';

const buildBorderRadiusValue = (cornerRadiusData)=> {
	var positions = [cornerRadiusData.tl, cornerRadiusData.tr, cornerRadiusData.br, cornerRadiusData.bl];

	return positions.join(PX + SPACE) + PX;
}

export function translate(style) {
	return {
		'border-radius': buildBorderRadiusValue(style.cornerRadius)
	};
}