const yargs = require('yargs');
const inquirer = require('inquirer');

inquirer
  .prompt([
    /* Pass your questions in here */

    {
      type: 'list',
      name: 'theme',
      message: 'What do you want to do?',
      choices: [
        'Order a pizza',
        'Make a reservation',
        new inquirer.Separator(),
        'Ask for opening hours',
        {
          name: 'Contact support',
          disabled: 'Unavailable at this time',
        },
        'Talk to the receptionist',
      ],
    },
    {
      type: 'list',
      name: 'size',
      message: 'What size do you need?',
      choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
      filter: function (val: any) {
        return val.toLowerCase();
      },
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
