import { BaseComponent } from '../base';
import style from './style';

export class Image extends BaseComponent {
    render() {
        return <img class={style['wysiwyg-image']} style={this.state.style} src={this.props.data.Content.ImageSource}/>
    }
}