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

1. Clone the repo
   ```sh
   git clone
   ```
2. Open the project using IntelliJ or equivalent IDEs and run the project
3. Or run the following command in the root directory:
   ```sh
   mvn clean javafx:run
   ```
4. Or run the executable jar file using the following command in the root directory:
   ```sh
   mvn clean package
   ```
   ```
   java --module-path [your own javafx lib path] --add-modules javafx.controls,javafx.fxml -jar target/VisualNeo-1.0.0.jar
   ```
   JavaFX is separated from JDK 11+ and needed to installed independently by users. To download JavaFX, click [here](https://gluonhq.com/products/javafx/). Use the path of lib directory as your command line input.

<!-- USAGE EXAMPLES -->

## Usage

Here is a quick guideline of how the system can be used.

1. Load the remote or local database by providing security data (uri, username, password)
   ![Load Database Screen Shot][load-database-screenshot]
2. View the metadata of the loaded database
   ![Database Metadata Screen Shot][database-metadata-screenshot]
3. Construct graph queries by pressing:

   **Shift**: Create nodes/edges

   **Ctrl**: Select multiple nodes/edges

   **Backspace/Delete**: Delete nodes/edges

4. Save/Load self-defined patterns (if needed)
5. Load the recommended patterns from file (if needed)
   ![Load Recommended Pattern Screen Shot][load-pattern-screenshot]
6. Fire the search and view the returned results
   ![Display Result Screen Shot][display-result-screenshot]

_For more examples, please refer to the manual._

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
