import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import Toggle from "./toggle";

const Header = () => (
	<header class={style.header}>
		<h1>Preact WYSIWYG SandBox</h1>
		<nav>
			<Toggle />
			<Link activeClassName={style.active} href="/">SandBox</Link>
		</nav>
	</header>
);

export default Header;
