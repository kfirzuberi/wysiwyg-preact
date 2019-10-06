import { Component } from 'preact';
import style from './style';

export class SandBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write here DOM elements Model...'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    handleUpdate() {
        console.log(this.state.value);

    }
    handleClear() {
        this.setState({value:''})
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
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
            </div>
        </div>
    }
}