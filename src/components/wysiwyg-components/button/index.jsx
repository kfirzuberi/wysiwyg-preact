import { BaseComponent } from '../base';
import style from './style';

export class Button extends BaseComponent {
    constructor(props) {
        super(props);

        this.setState({
            canClick: this.props.data.Action.type !== 'none'
        })

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this.props.data.Action);
    }

    render() {
        return <button class={style['wysiwyg-button']} style={this.state.style} {...this.props.data.Content.Attributes}
            onClick={this.state.canClick ? this.handleClick : undefined}> {this.props.data.Content.Text} </button>
    }
}