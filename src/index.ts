const yargs = require('yargs');
const inquirer = require('inquirer');

const start = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'fileType',
        message: 'What files would you like to generate?',
        choices: [
          'Redux',
          new inquirer.Separator(), //  unavailable below
          {
            name: 'ALL UI',
            disabled: 'Unavailable - Please Contribute',
          },
          {
            name: 'ALL API',
            disabled: 'Unavailable - Please Contribute',
          },
          {
            name: 'Sequelize Model and Migration',
            disabled: 'Unavailable - Please Contribute',
          },
          {
            name: 'GraphQL Files',
            disabled: 'Unavailable - Please Contribute',
          },
        ],
      },
      {
        type: 'input',
        name: 'file_name',
        message: 'What is the name of the file',
      },
    ])
    .then((answers: any) => {
      // Use user feedback for... whatever!!
      console.log(JSON.stringify(answers, null, '  '));
    })
    .catch((error: Error) => {
      if (error) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }
    });
};

module.exports = start();
