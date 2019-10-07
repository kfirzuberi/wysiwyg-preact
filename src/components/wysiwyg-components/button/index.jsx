import { Component } from 'preact';
import { getTranslator as translate } from '../../../services/stylesTranslateros/styleTranslatorFactory';
import style from './style';

export class Button extends Component {
    constructor(props) {
        super(props);

        this.setStyle(this.props.data.Style);
    }

    setStyle(data) {
        const dynamicStyle = Object.keys(data).reduce((acc, style) =>
            Object.assign(acc, translate(style)(data)), {});

        this.setState({ style: dynamicStyle });
    }

    render() {
        return <button class={style['wysiwyg-shape']} style={this.state.style}> {this.props.data.Content.Text} </button>
    }
}