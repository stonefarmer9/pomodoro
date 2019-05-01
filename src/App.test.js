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

    expect(wrapper.find('div.Timer').text()).toBe("25:005:00")
  })

  it('should increase the number of workMinutes', ()=>{
    wrapper.find('button.addWorkTime').simulate('click')
    wrapper.find('button.startButton').simulate('click')

    expect(wrapper.find('div.Timer').text()).toBe("26:005:00")
  })

  it('should decrease the number of workMinutes', ()=>{
    wrapper.find('button.subWorkTime').simulate('click')
    wrapper.find('button.startButton').simulate('click')

    expect(wrapper.find('div.Timer').text()).toBe("24:005:00")
  })
  it('should increase the number of breakMinutes', ()=>{
    wrapper.find('button.addBreakTime').simulate('click')
    wrapper.find('button.startButton').simulate('click')

    expect(wrapper.find('div.Timer').text()).toBe("25:006:00")
  })
  it('should decrease the number of breakMinutes', ()=>{
    wrapper.find('button.subBreakTime').simulate('click')
    wrapper.find('button.startButton').simulate('click')

    expect(wrapper.find('div.Timer').text()).toBe("25:004:00")
  })




})
})
