const REFERENCES = {
	TOP: 'top',
	MIDDLE: 'middle',
	BOTTOM: 'bottom',
	LEFT: 'left',
	CENTER: 'center',
	RIGHT: 'right'
};

const getPosition=(sizeData, positionData, reference) =>{
	reference = reference.toLowerCase();

	var position = {};
	var verticalDimension = positionData.vertical;
	var horizontalDimension = positionData.horizontal;

	switch (reference) {
		case REFERENCES.MIDDLE:
			position.top = calculatePositionFromCenter(sizeData.height, verticalDimension);
			break;
		case REFERENCES.CENTER:
			position.left = calculatePositionFromCenter(sizeData.width, horizontalDimension);
			break;
		case REFERENCES.TOP:
		case REFERENCES.BOTTOM:
			position[reference] = getDimensionValue(verticalDimension);
			break;
		case REFERENCES.LEFT:
		case REFERENCES.RIGHT:
			position[reference] = getDimensionValue(horizontalDimension);
			break;
	}

	return position;
}

const calculatePositionFromCenter=(sizeDimension, positionDimension) =>{
	var offset = getDimensionValue(positionDimension);
	var size = getDimensionValue(sizeDimension);

	return 'calc(50% + ' + offset + ' - (' + size + ' / 2))';
}

const getDimensionValue=(dimension) =>{
	return dimension.value + dimension.unit;
}

export function translate(style) {
	var positionData = style.position;
	var sizeData = style.size;

	var verticalPosition = getPosition(sizeData, positionData, positionData.vReference);
	var horizontalPosition = getPosition(sizeData, positionData, positionData.hReference);

	
	return {...verticalPosition, ...horizontalPosition};
}