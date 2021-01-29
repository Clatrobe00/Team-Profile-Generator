# Team-Profile-Generator
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
https://opensource.org/licenses/MIT

## Description

This is a command line application that allows the user to quickly build a profile of their development team. The app takes in input from the user and returns it as a generated HTML page with cards for each member of the team. The cards include the team member's role, email, name, ID, and details specific to their position. Clicking the email address for each team member will open the users default mail application and auto-populate the recipient field with the team member's email. Clicking an engineer's Github link will open that engineer's Github in a new tab. The application begins by requesting information on the team manager, and then offers the option to add an Engineer or Intern, or to exit. The user may enter as many team members as they like, and the HTML will be generated when the user selects EXIT.
      
## Table of Contents 
      
* [Installation](#installation)
      
* [Usage](#usage)
      
* [Contributing](#contributing)
      
* [Tests](#tests)
      
* [Questions](#questions)

* [License](#license)
      
## Installation

This application can be pulled from Github. Each module is exported as a class.
      
## Usage

The app can be initialized using the App.start() method. It can also be initialized from index.js using node index.js Individual pieces of information can be taken from the employee classes using the getRole(), getEmail(), getName(), getGithub(), getId(), getOffice(), and getSchool() methods. This application has node dependencies and needs npm init for node setup.
        
## Contributing

If you'd like to contribute to this project, make a pull request with a description of your contribution.
      
## Tests
      
To run tests, run the following command:

Enter command 'npm run test' to test classes.
      
## Questions

For questions regarding this repo contact me at charlie.bateman117@gmail.com or visit my repository at https://github.com/Clatrobe00

## License

Copyright 2021 undefined

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.