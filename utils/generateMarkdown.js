//Function to create the markdown of the README
function generateMarkdown(data) {
  
  //creates empty string for if the overview is left blank
  let oview = ``;

  //if the overview is not empty, populates the space
  if (data.overview !== '') {
    oview += `
  ## Overview <br  />  
  ${data.overview}
  `}

  //generate table of contents  and since license will always have value, it is included
  let tableOfContents = `
  ## Table of Contents <br  />  
  *  [License](#License) <br  />  
  `
  //use if statements for optional sections to not be included in table of contents
  if (data.installation !== '') {
    tableOfContents += `*  [Installation](#installation)  <br  />  `
  };
  if (data.use !== '') {
    tableOfContents += `*  [Usage](#Usage)  <br  />  `
  };
  if (data.credit !== '') {
    tableOfContents += `*  [Contributing](#Contributing)  <br  />  `
  };
  if (data.test !== '') {
    tableOfContents += `*  [Tests](#Tests)  <br  />  `
  };
  if (data.email !== '' || data.github !== '') {
    tableOfContents += `*  [Questions](#Questions)  <br  />  `
  };

  //empty string to populate with items from switch
  let licenses = '';

  //based on information in data.license
  switch (data.license) {
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

  //creates empty string for if the Installation is left blank
  let install = '';

  //if the installation is not empty, populates the space
  if (data.installation !== '') {
    install += `
  ## Installation <br  />  
  ${data.installation}
  `}

  //creates empty string for if the usage is left blank
  let usage = '';

  //if the usage is not empty, populates the space
  if (data.use !== '') {
    usage += `
  ## Usage <br  />  
  ${data.use}
  `}

  //creates empty string for if the contributing is left blank
  let contribute = '';

  //if the contributing is not empty, populates the space
  if (data.credit !== '') {
    contribute += `
  ## Contributing <br  />  
  This project was also worked on by: ${data.credit}
  `}

  //creates empty string for if the test is left blank
  let tests = '';

  //if the test is not empty, populates the space
  if (data.test !== '') {
    tests += `
  ## Tests <br  />  
  ${data.test}
  `}

  //creates empty string for if the contact info is left blank
  let questions = '';

  //if the both email and github and is not empty, populates the space
  if (data.email !== '' && data.github !== '') {
    questions += `## Questions <br  />  
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).
  `}
  //if the email is not blank and the github is left blank it populates the space
  else if (data.email !== '' && data.github === '') {
    questions += `## Questions <br  />  
    If you have any questions about the repo, open an issue or contact me directly at ${data.email}.`
  }
  //if the email is left blank but the github is not left blank, it populates the space
  else if (data.email === '' && data.github !== '') {
    questions += `## Questions <br  />  
    You can find more of my work at [${data.github}](https://github.com/${data.github}/).
  `}


  //combines all options into final product to return when called
  const finalMkdn = `
# ${data.title}

${oview}  
​
${tableOfContents}

## License
${licenses}

${install}

${usage}

${contribute}

${tests}

${questions}

` ;

  //returns the final product
  return finalMkdn
    ;
}

module.exports = generateMarkdown;
