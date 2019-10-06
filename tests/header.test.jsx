import { expect } from 'chai';
import { h } from 'preact';
import { mount } from 'enzyme';

import Header from '../src/components/header';

describe('Initial Test of the Header', () => {
	test('Header renders 3 nav items', () => {
		const context = mount(<Header />);
		expect(context.find('h1').text()).to.equal('Preact WYSIWYG SandBox');
		expect(context.find('Link').length).to.equal(1);
	});
});
