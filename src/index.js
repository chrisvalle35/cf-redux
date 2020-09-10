const path = require('path');
const inquirer = require('inquirer');
const { writeFile } = require('fs');

function createFileStructure() {
  const file = writeFile('./', '', (err, data) => {
    console.log(data);
    return true;
  });
  return false;
}

function getCurrentDir() {
  const dirName = path.dirname(__dirname);
  const cwd = process.cwd();
  console.log('dirName', dirName);
  console.log('cwd', cwd);
  return dirName;
}

function createFolderByName(folderName) {
  return true;
}

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
        default: function () {
          return 'Example';
        },
      },
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(JSON.stringify(answers, null, '  '));
      const dir = getCurrentDir();
    })
    .catch((error) => {
      if (error) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }
    });
};

module.exports = start();
