
const getDimensionValue=(dimension) =>{
	return dimension.value + dimension.unit;
}

export function translate(style) {
	var sizeData = style.size;
	var translation = {};
	var width = sizeData.width;
	var height = sizeData.height;

	if (width) {
		translation.width = getDimensionValue(width);
	}

	if (height) {
		translation.height = getDimensionValue(height);
	}

	return translation;
}