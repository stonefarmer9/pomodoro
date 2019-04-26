import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow, mount, render} from 'enzyme'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<App/>)
  })

it('renders a start timer button', () => {
  expect(wrapper.find('button').text()).toBe('Start Timer')
})
})
