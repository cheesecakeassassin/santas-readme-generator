// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case 'MIT License':
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
            break;
        case 'Boost Software License 1.0':
            return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
            break;
        case 'The Unlicense':
            return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
            break;
        case 'GNU AGPLv3':
            return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
            break;
        case 'GNU GPLv3':
            return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
            break;
        case 'GNU LGPLv3':
            return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
            break;
        case 'Mozilla Public License 2.0':
            return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
            break;
        case 'Apache License 2.0':
            return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            break;
        default:
            return '';
            break;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
        case 'MIT License':
            return `[MIT License](https://choosealicense.com/licenses/mit/)`;
            break;
        case 'Boost Software License 1.0':
            return `[Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)`;
            break;
        case 'The Unlicense':
            return `[Unlicense](https://choosealicense.com/licenses/unlicense/)`;
            break;
        case 'GNU AGPLv3':
            return `[GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)`;
            break;
        case 'GNU GPLv3':
            return `[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)`;
            break;
        case 'GNU LGPLv3':
            return `[GNU LGPLv3](https://choosealicense.com/licenses/lgpl-3.0/)`;
            break;
        case 'Mozilla Public License 2.0':
            return `[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)`;
            break;
        case 'Apache License 2.0':
            return `[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)`;
            break;
        default:
            return '';
            break;
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license)
  {
    return `## **License**

    This software is protected under the ${renderLicenseLink(license)}.`;
  } else {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# **${data.projectName}**

  ${renderLicenseBadge(data.license)}
  
  ## **Description**

  ${data.description}

  ## **Table of Contents**

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)
  
  ## **Installation**

  ${data.installation}

  ## **Usage**

  ${data.usage}

  ## **Contribution**

  Built by

  ${data.contributing}

  ## **Tests**

  ${data.tests}

  ## **Questions**
  
  If you have any questions, please feel free to reach out by email or GitHub: <br/>
  * [Email](mailto:${data.email})
  * [GitHub](www.github.com/${data.github})
  
  ${renderLicenseSection(data.license)}

  Made with ❤️ by ${data.name}
`;
}

module.exports = generateMarkdown;
