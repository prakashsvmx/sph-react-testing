import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Increment from "./Increment";
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({
    adapter: new EnzymeAdapter()
});

// npm install --save-dev enzyme jest-enzyme enzyme-adapter-react-16
//Test the behaviour not the implementation
//Find Balance b/w Unit and integration testing.
//No Snapshot testing.
//
//it or test can be used.
//Test suite must contain atleast one test.

//Babel plugin to remove the properties of html elements.
// npm install --save-dev babel-plugin-react-remove-properties


test('Renders without error', ()=>{
    const wrapper = shallow(<Increment/>);
    expect(wrapper).toBeTruthy();
    //Add a attribute based testing to not to distrub other app functionalities
    const rootElement = wrapper.find("[data-test='component-increment']");
    expect(rootElement.length).toBe(1);
});

test('Renders increment button', ()=>{
    const wrapper = shallow(<Increment/>);
    //Add a attribute based testing to not to distrub other app functionalities
    const rootElement = wrapper.find("[data-test='btn-increment']");
    expect(rootElement.length).toBe(1);

});

test('Renders Counter display', ()=>{
    const wrapper = shallow(<Increment/>);
    //Add a attribute based testing to not to distrub other app functionalities
    const rootElement = wrapper.find("[data-test='counter-display']");
    expect(rootElement.length).toBe(1);
});

test('Renders Counter at 0', ()=>{

});


test('Clicking button increments Counter display', ()=>{

});