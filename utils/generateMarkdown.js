// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    // for an MIT - 
  if (license == 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }else if(license == 'Apache_2.0'){
    // for APACHE 2.0
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if(license == 'GPLv3'){
    // for GPL 3.0
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }else if(license == 'BSD_3'){
    // for BSD 3
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  }else{
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usageInfo}

  ## License
  This project is licensed under ${data.license}.


  ## Contributing
  ${data.contribute}

  ## Tests
  ${data.testInstructions}

  ## Questions
  If you have any questions about this project you can reach me at ${data.questions}.

  To view more of my Projects go to https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
