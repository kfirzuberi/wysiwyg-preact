import { Component } from 'preact';
import { Canvas } from '../canvas';
import { Overlay } from '../overlay';

export class WYSIWYG extends Component {
    constructor(props) {
        super(props);

        this.setState({
            displayOverlay: !!this.props.data.Style.backcover
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        this.setState({
            displayOverlay: !!nextProps.data.Style.backcover
        })
    }

    render() {
        const overlay = this.state.displayOverlay ? <Overlay data={this.props.data.Style.backcover} ></Overlay> : undefined;

        return <div>
            {overlay}
            <Canvas data={this.props.data.RootVisualElement}></Canvas>
        </div>
    }
}