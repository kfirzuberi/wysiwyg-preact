const LTR_VALUE = 0;
const LTR_TRANSLATED = 'ltr';
const RTL_TRANSLATED = 'rtl';

export function translate(style) {
	return {
		direction: style.direction === LTR_VALUE ? LTR_TRANSLATED : RTL_TRANSLATED
	};
}