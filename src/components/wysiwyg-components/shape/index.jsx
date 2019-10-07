import { BaseComponent } from '../base';
import style from './style';

export class Shape extends BaseComponent {
    render() {
        return <div class={style['wysiwyg-shape']} style={this.state.style}> </div>
    }
}