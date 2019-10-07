import { Component } from 'preact';
import { getTranslator as translate } from '../../../services/stylesTranslateros/styleTranslatorFactory';
import style from './style';

export class Shape extends Component {
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
        return <div class={style['wysiwyg-shape']} style={this.state.style}> </div>
    }
}