<!-- PROJECT LOGO -->
<br/>
<div align="center">
    <h3 align="center">Robot Control System - Frontend</h3>
    <p align="center">
        As the author of this project, Liang Houdong, I have completed it as part of a coding assessment, reserving all copyright rights.
    </p>
    <p align="center">
        This project represents the frontend component of the robot control system. It offers users a user-friendly interface to efficiently control a remote robot's operations.
    </p>
</div>
<br/>

<!-- ABOUT THE PROJECT -->

## About The Project

![Frontend Screenshot][frontend-screenshot]

This project is minimalistic web-based application for controlling a simulated robot. And this repository is the frontend part. It is a responsive and intuitive control panel for the robot. It adopts modern design principles to create an engaging and easy-to-use interface.

### Built With

- [![HTML][HTML]][HTML-url]
- [![CSS][CSS]][CSS-url]
- [![JavaScript][JavaScript]][JavaScript-url]
- [![React][React]][React-url]

<!-- GETTING STARTED -->

## Getting Started

Please follow the instructions below to set up your frontend system locally:

### Prerequisites

- Node v18.16.0+
- Node Package Manager (NPM) 9.5.1+

### Running

1. Clone the repo:
   ```sh
   git clone https://github.com/dongdong3272/robot-control-frontend.git
   ```
2. Run the following command in the root directory:
   ```sh
   npm install
   ```
3. Start running the frontend:
   ```sh
   npm start
   ```
   Note that before running the frontend, please start the backend server first. To start the backend server, please read the manual in the backend project.

### Test

1. There are 11 standard tests provided in App.test.js file. They focus on the UI component display and the communication from the frontend to the server. For the server-side test, please check the backend project. The following command shows how to run the test:
   ```sh
   npm test
   ```

<!-- USAGE EXAMPLES -->

## Usage

Here is a quick guideline of how the system can be used. There are many controls on the panel as follows:

1. Emergency Button: Click to initiate an emergency call, suspending all robot functions and locking the frontend UI.

2. Lock/Unlock Button: Click to toggle robot lock/unlock status. When locked, only map navigation is allowed.

3. Speed Control: Adjust the robot's speed with buttons above and below the speed display. Speed ranges from 0.3m/s to 1.5m/s.

4. Pick Up Button: Click to instruct the robot to pick up products.

5. Drop Off Button: Click to instruct the robot to drop off products.

6. Handler: Simulates a physical control handle, enabling 360-degree control of the robot's movement. Click and drag the white inner handler with the mouse to operate.

7. Map: Utilizes the Google Maps API to mimic the digital screen on the robot control platform. In practice, it may represent a 2D building scan or similar smaller-scale maps.

<!-- CONTACT -->

## Contact

LIANG Houdong - [Personal Website](https://dongdong3272.github.io/) - Email: holiang@ucsd.edu

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[frontend-screenshot]: public/frontend_screenshot.png
[backend-screenshot]: public/backend_screenshot.png
[JavaScript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[React]: https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black
[React-url]: https://reactjs.org/
[HTML]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[HTML-url]: https://developer.mozilla.org/en-US/docs/Web/HTML
[CSS]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
