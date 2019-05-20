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

  it('should render the timer component on click', ()=> {
    wrapper.find('button.startButton').simulate('click')

    expect(wrapper.find('div.Timer')).toBeTruthy()
  })

  it('should render the sound button', ()=> {
    expect(wrapper.find('button.soundButton')).toBeTruthy()
  })

  it('should change the sound state to off', () => {
    wrapper.find('button.soundButton').simulate('click')

    expect(wrapper.state().sound).toBe('off')
  })


  it('should change increase the number of sessions', () => {
    wrapper.find('button.addSession').simulate('click')

    expect(wrapper.state().sessions).toBe(2)
  })

  it('should change decrease the number of sessions', () => {
    wrapper.find('button.subSession').simulate('click')

    expect(wrapper.state().sessions).toBe(0)
  })

  it('should increase the number of workMinutes', ()=> {
    wrapper.find('button.addWorkTime').simulate('click')

    expect(wrapper.state().workTime).toBe(26)
  })

  it('should decrease the number of workMinutes', ()=> {
    wrapper.find('button.subWorkTime').simulate('click')

    expect(wrapper.state().workTime).toBe(24)
  })
  it('should increase the number of breakMinutes', ()=> {
    wrapper.find('button.addBreakTime').simulate('click')

    expect(wrapper.state().breakTime).toBe(6)
  })
  it('should decrease the number of breakMinutes', ()=> {
    wrapper.find('button.subBreakTime').simulate('click')

    expect(wrapper.state().breakTime).toBe(4)
  })
  })
})
