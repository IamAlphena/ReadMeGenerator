


//Function to create the markdown of the README
function generateMarkdown(data) { 
  //generate table of contents  
  let tableOfContents = `
  ## Table of Contents <br  />  
  * [License] (#License)
  ` 
  //use if statements for optional sections to not be included in table of contents
  if (data.installation !== '') {
    tableOfContents += `* [Installation] (#installation)  <br  />  `
  };
  if (data.use !== '') {
    tableOfContents += `* [Usage] (#usage)  <br  />  `
  };

//empty string to populate with items from switch
let licenses = '';

//based on information in data.license
switch (data.license){
  //if MIT, add this badge
  case 'MIT':
    licenses += `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  break
  //if APACHE, add this badge
  case 'APACHE 2.0':
    licenses += `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    break
    //if GPL, add this badge
  case 'GPL 3.0':
    licenses += `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    break
  //if BSD, add this badge
  case 'BSD 3':
    licenses += `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    break
    //if None, populate with this text
  case 'None':
    licenses += `There are no licenses for this project`
    break
}

console.log(licenses)
//combines all options into final product to return when called
  const finalMkdn  = `
# ${data.title}

## Overview
${data.overview}  
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
​
${tableOfContents}

## License
${licenses}

## Installation
${data.installation}

## Systems Used
${data.systems}



## Tests

## Contributing
${data.credit}

## Questions


` ;

return finalMkdn
;
}

module.exports = generateMarkdown;
