import { expect } from 'chai';
import { h } from 'preact';
import { mount, render } from 'enzyme';
import { act } from 'preact/test-utils';

import { Button } from '../src/components/wysiwyg-components/button';

describe('Button', () => {
    let data, wrapper;
    beforeEach(() => {
        data = {
            Style: {},
            Action: { type: "" },
            Content: {
                Text: "initial"
            }
        };

        wrapper = mount(<Button data={data}></Button>);
    })

    test('should add . on click using simulate', () => {
        const before = wrapper.text();

        wrapper.find('button').simulate('click');

        expect(before).to.include('initial');
        expect(wrapper.text()).to.include('initial.');
    });

    test('should add . on click using act', () => {
        const before = wrapper.text();

        const onClick = wrapper.find('button').props().onClick;
        act(() => {
            onClick();
        });

        wrapper.update();

        expect(before).to.include('initial');
        expect(wrapper.text()).to.include('initial.');
    });
});
