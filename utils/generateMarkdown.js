// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { 
  console.log('hello', data);
  
  let tableOfContents = `## Table of Contents <br  />  ` 
  
  if (data.installation !== '') {
    tableOfContents += `* [Installation] (#installation)  <br  />  `
  };
  if (data.use !== '') {
    tableOfContents += `* [Usage] (#usage)  <br  />  `
  };


  const finalMkdn  = `
# ${data.title}

## Overview
${data.overview}  
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
​
${tableOfContents}

<a name="installation"/>
## Installation
${data.use}

## Systems Used
${data.systems}

## License

## Tests

## Contributing
${data.credit}

## Questions


` ;

return finalMkdn
;
}

module.exports = generateMarkdown;
