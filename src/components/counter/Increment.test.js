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

/**
 * This is a factory funciton to create a shallow wrapper component.
 * @funciton setUp
 * @param {object} props - Component Props
 * @param state -
 * @returns {ShallowWrappr}
 */
const setUp = (props={}, state=null)=>{
    return shallow(<Increment {...props}/>);
}

/**
 * Return a ShallowWrappe containing nodes with the given data-test value.
 * @param {ShallowWrappr} wrapper
 * @param {string} val
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val)=>{
    return wrapper.find(`[data-test="${val}"]`);
};


test('Renders without error', ()=>{
    const wrapper = setUp()
    //Add a attribute based testing to not to distrub other app functionalities
    const rootElement = findByTestAttr(wrapper,'component-increment');
    expect(rootElement.length).toBe(1);
});

test('Renders increment button', ()=>{
    const wrapper =setUp();
    //Add a attribute based testing to not to distrub other app functionalities
    const rootElement = findByTestAttr(wrapper,'btn-increment');
    expect(rootElement.length).toBe(1);

});

test('Renders Counter display', ()=>{
    const wrapper = shallow(<Increment/>);
    //Add a attribute based testing to not to distrub other app functionalities
    const rootElement = findByTestAttr(wrapper,'counter-display');
    expect(rootElement.length).toBe(1);
});

test('Renders Counter at 0', ()=>{

});


test('Clicking button increments Counter display', ()=>{

});