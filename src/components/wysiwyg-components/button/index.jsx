import { BaseComponent } from '../base';
import style from './style';
import { h } from 'preact';

export class Button extends BaseComponent {
    constructor(props) {
        super(props);

        this.setState({
            canClick: this.props.data.Action.type !== 'none',
            text : this.props.data.Content.Text
        })

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this.props.data.Action);
        const text= this.state.text + '.';
        this.setState({text})
    }

    render() {
        return <button class={style['wysiwyg-button']} style={this.state.style} {...this.props.data.Content.Attributes}
            onClick={this.state.canClick ? this.handleClick : undefined}> {this.state.text} </button>
    }
}