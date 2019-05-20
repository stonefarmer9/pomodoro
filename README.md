# Pomodoro Timer

A small web app to be used as pomodoro style work timer.

## Dependancies

```
Javascript
React
Jest
Enzyme
CSS
```

## Testing

The program has been built test-driven. Currently using Jest/Enzyme only. All front end features are tested but the timer itself is not tested using this library. The timer functions but I have not yet learnt an effective way to test a timer.

## Approach

I approached this project with two goals. To learn more about styling with React and CSS and to implement a timer function.

The project was test-driven for the most part.

## Component Breakdown

### App

- Renders the control buttons to control how many sessions there are, they time spent working and the break time.

### Timer

- Renders the clock showing time remaining, updates Apps state via props.

### Sound

 - Renders the sound icon button and controls changing of the button Icon.


## Work to be Done

 - Sound needs to be implemented (currently only implemented to learn how to get icons as buttons)

 - Break time needs to be enabled so the time immidiately begins to count down the break time.

 - Sessions need to control how many times the timer loops before finally stopping.

 - I feel more testing is needed.

 - The App is not very DRY with all the add/sub time methods - this needs refactoring to be simpler.

 - I might want to add a header to the page but will make final decision when functionality is in place.

 
