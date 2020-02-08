# _Solar Age Calculator_

#### _Calculates Solar Age on different planets in the solar system, Current version: Feb 2020_

#### By _**Alyssa Colistro**_

## Description

_This is a simple web application that is designed to take in a number from a user (their age) and output what their "solar" age is on Mercury, Venus, Mars and Jupiter. It will also output how much time the user has left to live or how many years past life expectancy they are based on an Earth life expectancy of 75 years._

|   Behavior    |   Input     |     Output    |
|--------------:|:-----------:|--------------:|
|Should only take a number for age object. |abc |"not a number" |
|Ensure the number entered is a positive number |-25 |"please enter a positive number."|
|Convert Earth age to Mercury solar age. |25 |104.17 |
|Convert Earth age to Venus solar age. |25 |40.32 |
|Convert Earth age to Mars solar age. |25 |13.30 |
|Convert Earth age to Jupiter solar age. |25 |2.11 |
|Calculate years left to live on Earth based on a life expectancy of 75 Earth years. |25 |50 |
|Calculate years left to live on Mercury based on a life expectancy of 75 Earth years. |25 |-86.17 |
|Calculate years left to live on Venus based on a life expectancy of 75 Earth years. |25 |6.18 |
|Calculate years left to live on Mars based on a life expectancy of 75 Earth years. |25 |127.70 |
|Calculate years left to live on Jupiter based on a life expectancy of 75 Earth years. |25 |887.39 |
|Calculate years past Earth life expectancy based on a life expectancy of 75 earth years. |85 |10 |
|Calculate years past Mercury life expectancy based on a life expectancy of 75 earth years. |85 |-292.10 |
|Calculate years past Venus life expectancy based on a life expectancy of 75 earth years. |85 |-68.27 |
|Calculate years past Mars life expectancy based on a life expectancy of 75 earth years. |85 |119.91 |
|Calculate years past Jupiter life expectancy based on a life expectancy of 75 earth years. |85 |1001.78 |





## Setup/Installation Requirements

* _Access my repository for this project on GitHub here: https://github.com/acolistro/week_5.git_
* _Ensure you have node and npm properly installed on your machine_
* _Once you have the repository cloned, run npm init -y in the repository from your command line_
* _Delete the package-lock.json file from the repository._
* _Once that is done, run npm install_
* _Once that is done, run npm run build_
* _Once that is complete you should be able to use jest to see the results of the tests written (using npm test in the command line) and use the functionality of the app_
* _If you build a front end/UI, you can use the npm start command to view the app on a local server._


## Known Bugs

_There are no known bugs with this application at this time._

## Support and contact details

_If you find a bug I highly encourage you to contact me at arcolistro@gmail.com and/or submit a pull request to this repository. Please note that this application is not built to be compatible with web-accessibility tools or be viewed on any browser other than the current version of the Chrome browser._

## Technologies Used

_This app was built using JavaScript, Node.js, npm, HTML as well as the following dependencies:_

    "@babel/core": "^7.6.4",
    "@babel/plugin-transform-modules-commonjs": "^7.6.0",
    "clean-webpack-plugin": "^3.0.0",
    "css-loader": "^3.2.0",
    "eslint": "^6.3.0",
    "eslint-loader": "^3.0.0",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^24.9.0",
    "style-loader": "^1.0.0",
    "uglifyjs-webpack-plugin": "^2.2.0",
    "webpack": "4.39.3",
    "webpack-cli": "^3.3.8",
    "webpack-dev-server": "^3.8.0"
    "bootstrap": "^4.4.1",
    "jquery": "^3.4.1",
    "popper.js": "^1.16.1"

### License

*There are no licensed materials used in this app in its current state.*

Copyright (c) 2020 **_MallSoft95 LLC_**
