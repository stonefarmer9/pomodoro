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
    wrapper = mount(<App/>)
  })

it('renders a start timer button', () => {
  expect(wrapper.find('button.startButton').text()).toBe("Let's Pomodoro!")
})

describe('Buttons', ()=> {
  it('should render the timer component on click', ()=>{
    wrapper.find('button.startButton').simulate('click')

    expect(wrapper.find('div.Timer').text()).toBe("00:25:0000:05:00")
  })

  it('should increase the number of workMinutes', ()=>{
    wrapper.find('button.addWorkTime').simulate('click')
    wrapper.find('button.startButton').simulate('click')

    expect(wrapper.find('div.Timer').text()).toBe("00:26:0000:05:00")
  })

  it('should decrease the number of workMinutes', ()=>{
    wrapper.find('button.subWorkTime').simulate('click')
    wrapper.find('button.startButton').simulate('click')

    expect(wrapper.find('div.Timer').text()).toBe("00:24:0000:05:00")
  })
  it('should increase the number of breakMinutes', ()=>{
    wrapper.find('button.addBreakTime').simulate('click')
    wrapper.find('button.startButton').simulate('click')

    expect(wrapper.find('div.Timer').text()).toBe("00:25:0000:06:00")
  })
  it('should decrease the number of breakMinutes', ()=>{
    wrapper.find('button.subBreakTime').simulate('click')
    wrapper.find('button.startButton').simulate('click')

    expect(wrapper.find('div.Timer').text()).toBe("00:25:0000:04:00")
  })




})
})
