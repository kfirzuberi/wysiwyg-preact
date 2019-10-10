import { BaseComponent } from '../base';
import style from './style';
import { Shape } from "../shape";
import { Image } from "../image";
import { Button } from "../button";
import { h } from 'preact';

export class Canvas extends BaseComponent {
    constructor(props) {
        super(props);

        this.setStyle(this.props.data.Style);
    }

    shouldComponentUpdate(nextProps, nextState) {
        const style = nextProps.data.Style;
        this.setStyle(style);
    }

    render() {
        const getComponent = item => {
            switch (item.Type) {
                case 'Shape': return <Shape data={item} />;
                case 'Image': return <Image data={item} />;
                case 'Button': return <Button data={item} />;
            }
        }

        const all = (this.props.data.ChildElements || []).map(shape => getComponent(shape));

        return <div class={style['wysiwyg-canvas']} style={this.state.style}>
            {all}
        </div>
    }
}