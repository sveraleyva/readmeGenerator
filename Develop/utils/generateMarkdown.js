// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `<img src="https://img.shields.io/badge/license-${license}-blue.svg">`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `https://opensource.org/licenses/${license})`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License: 

    This project is licensed under ${license}

    ${renderLicenseBadge(license)}

    ${renderLicenseLink(license)}`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  1.[License](#license)

  2.[Description](#description)

  3.[Installation](#installation)

  4.[Usage Information](#usage-information)

  5.[Contribution Guidelines](#contributing)

  6.[Tests](#tests)

  7.[Questions](#questions)

  ## License
  ${renderLicenseSection(data.license)}

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage Information:
  ${data.usageInfo}

  ## Contribution Guidelines:
  ${data.contributing}

  ## Tests:
  ${data.tests}

  ## Questions:
  GitHub Profile: https://github.com/${data.username} 
  If you have any additional questions, please email me at ${data.email}.
  `;
}

module.exports = generateMarkdown;
