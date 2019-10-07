import style from './style';
import { Component } from 'preact';

export class Overlay extends Component {
    constructor(props) {
        super(props);

        this.setState({ style: this.props.data.Style })
    }

    shouldComponentUpdate(nextProps, nextState) {
        const style = nextProps.data.Style;
        this.setState({ style: style })
    }

    render() {
        return <div class={style['wysiwyg-overlay']} style={this.state.style}> </div>
    }
}