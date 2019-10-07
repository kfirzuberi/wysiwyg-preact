import { Component } from 'preact';
import { getTranslator as translate } from '../../../services/stylesTranslateros/styleTranslatorFactory';
import style from './style';
import { Shape } from "../shape";
import { Image } from "../image";
import { Button } from "../button";

export class Canvas extends Component {
    constructor(props) {
        super(props);

        this.setStyle(this.props.data.Style);
    }

    shouldComponentUpdate(nextProps, nextState) {
        const style = nextProps.data.Style;
        this.setStyle(style);
    }

    setStyle(data) {
        const dynamicStyle = Object.keys(data).reduce((acc, style) =>
            Object.assign(acc, translate(style)(data)), {});

        this.setState({ style: dynamicStyle });
    }

    render() {
        const getComponent = item => {
            switch (item.Type) {
                case 'Shape': return <Shape data={item} />;
                case 'Image': return <Image data={item} />;
                case 'Button': return <Button data={item} />;
            }
        }

        const all = this.props.data.ChildElements.map(shape => getComponent(shape));

        return <div class={style['wysiwyg-canvas']} style={this.state.style}>
            {all}
        </div>
    }
}