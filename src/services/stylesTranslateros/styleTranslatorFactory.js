import {translate as backgroundStyleTranslator} from './backgroundStyleTranslator';
import  {translate as cornerRadiusStyleTranslator}  from './cornerRadiusStyleTranslator';
import  {translate as directionStyleTranslator}  from './directionStyleTranslator';
import  {translate as positionStyleTranslator}  from './positionStyleTranslator';
import  {translate as sizeStyleTranslator}  from './sizeStyleTranslator';
import  {translate as borderStyleTranslator}  from './borderStyleTranslator';
import  {translate as fontStyleTranslator}  from './fontStyleTranslator';
import  {translate as zIndexStyleTranslator}  from './zIndexStyleTranslator';
import  {translate as opacityStyleTranslator}  from './opacityStyleTranslator';

const TRANSLATORS = {
	background: backgroundStyleTranslator,
	cornerRadius: cornerRadiusStyleTranslator,
	direction: directionStyleTranslator,
	position: positionStyleTranslator,
	size: sizeStyleTranslator,
	border: borderStyleTranslator,
	font: fontStyleTranslator,
	zIndex: zIndexStyleTranslator,
	opacity: opacityStyleTranslator
};

export function getTranslator(type){
	return TRANSLATORS[type];
}
