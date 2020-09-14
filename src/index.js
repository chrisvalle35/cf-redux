const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');

const SAMPLE_FILE_CONTENTS = `console.log('Overwrite Me! ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}')`;

const REDUX_FILE_MAP = [
  { fileName: 'actions.js', fileData: SAMPLE_FILE_CONTENTS },
  { fileName: 'reducer.js', fileData: SAMPLE_FILE_CONTENTS },
  { fileName: 'actionTypes.js', fileData: SAMPLE_FILE_CONTENTS },
];

async function createFileStructure(folderName = 'Example') {
  try {
    REDUX_FILE_MAP.forEach(async (file) => {
      const filePath = `./store/${folderName}/${file.fileName}`;
      await fs.promises.writeFile(filePath, file.fileData);
    });
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

function getCurrentDir() {
  const dirName = path.dirname(__dirname);
  const cwd = process.cwd();
  console.log('dirName', dirName);
  console.log('cwd', cwd);
  return dirName;
}

async function createFolderByName(folderPath = './store/Example') {
  console.log('Creating New Folder...');
  try {
    await fs.promises.mkdir(`${folderPath}`, { recursive: true });
    return true;
  } catch (error) {
    console.error('Error Creating New Folder...', error);
    return false;
  }
}

async function doesFolderExist(folderPath = `${process.cwd()}/store/Example`) {
  try {
    console.log('FolderPath', folderPath);
    const doesExist = await fs.promises.access(folderPath);
    if (doesExist === true) {
      console.log('Folder Exists');
      // const acc = await fs.promises.access(folderPath);
      // console.log(acc);
      return true;
    }
  } catch (error) {
    console.log('Folder does not exist', error);
    const newFolder = await createFolderByName(folderPath);
    console.log(newFolder);
    return newFolder;
  }
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
        name: 'fileName',
        message: 'What is the name of the file',
        default: function () {
          return 'Example';
        },
      },
    ])
    .then(async (answers) => {
      console.log(JSON.stringify(answers, null, '  '));
      if (answers.fileType === 'Redux') {
        console.log('Creating Redux Files...');
      }
      const folderPath = `./store/${answers.fileName}/`;
      console.log('folderPath');
      console.log(folderPath);
      const doesExist = await doesFolderExist(folderPath);
      // console.log('doesExist');
      // console.log(doesExist);
      const fileCreationResultBool = await createFileStructure(answers.fileName);
      console.log('Files successfully created: ', fileCreationResultBool);
      return fileCreationResultBool;
    })
    .catch((error) => {
      if (error) {
        // Prompt couldn't be rendered in the current environment
        console.error(error);
      } else {
        // Something else when wrong
        console.error('Disaster Struck');
      }
    });
};

module.exports = start();
