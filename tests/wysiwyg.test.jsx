import { expect } from 'chai';
import { h } from 'preact';
import { mount } from 'enzyme';

import { WYSIWYG } from '../src/components/wysiwyg-components/wysiwyg';

describe('WYSIWYG', () => {
    test('WYSIWYG with overlay', () => {
        const data = {
            Style: { backcover: {opacity : 0.5, "background":"#126db3"} },
            RootVisualElement: {
                Style: {}, ChildElements: []
            }
        }
        const context = mount(<WYSIWYG data={data} />);
        expect(context.find('Overlay').length).to.equal(1);
        expect(context.find('Canvas').length).to.equal(1);
    });

    test('WYSIWYG without overlay', () => {
        const data = {
            Style: {},
            RootVisualElement: {
                Style: {}, ChildElements: []
            }
        }
        const context = mount(<WYSIWYG data={data} />);
        expect(context.find('Overlay').length).to.equal(0);
        expect(context.find('Canvas').length).to.equal(1);
    });
});
