import { Component } from 'preact';
import style from './style';
import { Canvas } from '../wysiwyg-components/canvas'

export class SandBox extends Component {
    constructor(props) {
        super(props);

        const model = { RootVisualElement: { Text: 'Please write here DOM elements Model...', Style: {} } };

        this.state = {
            value: JSON.stringify(model, null, 2),
            data: model
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    handleUpdate() {
        console.log(this.state.value);
    }

    handleClear() {
        this.setState({ value: '' })
    }

    handleChange(event) {
        const newValue = event.target.value;
        this.setState({ value: newValue, data: JSON.parse(newValue) });
    }

    render() {
        return <div class={style.sandbox}>
            <div class={style['data'] + " " + style['input']}>
                <div class={style.actions}>
                    <button onClick={this.handleUpdate} class={style['action-button'] + " " + style.run}> Update </button>
                    <button onClick={this.handleClear} class={style['action-button'] + " " + style.clean}> Clear </button>
                </div>
                <textarea value={this.state.value} onChange={this.handleChange} class={style['input-text']}> </textarea>

            </div>
            <div class={style['data'] + " " + style['output']}>
                <Canvas data={this.state.data.RootVisualElement}></Canvas>
            </div>
        </div>
    }
}