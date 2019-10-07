import { Component } from 'preact';
import { getTranslator as translate } from '../../../services/stylesTranslateros/styleTranslatorFactory';
import style from './style';

export class Canvas extends Component {
    constructor(props) {
        super(props);

        this.setStyle(this.props.data.Style);
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate');

        const style = nextProps.data.Style; //this.props.data.Style 
        this.setStyle(style);
    }

    getSnapshotBeforeUpdate(){
        console.log('getSnapshotBeforeUpdate');
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    setStyle(data) {
        const dynamicStyle = Object.keys(data).reduce((acc, style) =>
            Object.assign(acc, translate(style)(data)), {});

        this.setState({ style: dynamicStyle });
    }

    render() {
        return <div class={style['wysiwyg-canvas']} style={this.state.style}></div>
    }
}