import { h } from 'preact';
import style from './style';
import { SandBox } from '../../components/sandbox'

const Home = () => (
	<div class={style.home}>
		<SandBox></SandBox>
	</div>
);

export default Home;
