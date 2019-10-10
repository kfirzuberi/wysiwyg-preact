import { Component } from 'preact';
import style from './style';

import { connect } from "unistore/preact";
import { actions } from '../../../store/actions';

const Toggle = ({ wysiwygVisibility, toogleWysiwygVisibility }) => (
    <label class={style['switch']}>
        <input type="checkbox" checked={wysiwygVisibility} onChange={toogleWysiwygVisibility} />
        <span class={style['slider'] + ' ' + style['round']}></span>
    </label>)

export default connect(['wysiwygVisibility'], actions)(Toggle)