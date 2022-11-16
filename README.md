# React Bug Tracker

This is a React-based bug tracker with a log in page, a few animations, and a dashboard for resolving, deleting and prioritising bugs.

It also has an option to unresolve any bugs which have been erroneously resolved, and it features a progress bar to show how well you're doing in terms of resolving them.

The app uses local storage to save the state of the bugs and reloads them from there once "logged in". The log in authentication is currently non-existent, as my intention was to build the user interface with React as opposed to a full-stack app with a backend.

## Demo

https://cute-blancmange-6cf41e.netlify.app/

## Features

- Log in form
- Fully responsive on all devices
- Option to categorise bugs by priority
- Saves in local storage

## Installation

Once you've downloaded the repo, just install it by typing in npm install into your terminal.

```bash
  npm install react-bug-tracker
  cd react-bug-tracker
```

## Authors

- [@nathanifill](https://www.github.com/nathanifill)

## Feedback

If you have any feedback, please reach out to me on [Twitter](https://www.twitter.com/nathanifill).

## Acknowledgements

- [CodeBubb's React Bug Tracker Project (which inspired me to make this one)](https://www.youtube.com/watch?v=o76g5H-9qqY&ab_channel=codebubb)
- [Vik Evstifeev's Design](https://www.behance.net/gallery/58941485/Worker-studio-task-tracker-%28desktop%29?)
- [Mira Violet's CSS Gradient Border CodePen](https://codepen.io/miraviolet/pen/ZobWEg)
- [Bramus Van Damme's mad CSS form validation skills](https://www.bram.us/2021/01/28/form-validation-you-want-notfocusinvalid-not-invalid/)
- [Nik Sumeiko's Gist to prevent autocomplete](https://gist.github.com/niksumeiko/360164708c3b326bd1c8)
- [Nathan Sebhastian's number formatting function](https://sebhastian.com/javascript-format-number-commas/)
- [Foakesm's amazing Stack Overflow solution to adjust state based off of viewport width](https://stackoverflow.com/questions/46586165/react-conditionally-render-based-on-viewport-size)
