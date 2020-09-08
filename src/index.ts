const yargs = require('yargs');

console.log(chalk.yellow(figlet.textSync('Ginit', { horizontalLayout: 'full' })));

const argv = yargs
  .command('redux', 'Tells whether an year is leap year or not', {
    year: {
      description: 'the year to check for',
      alias: 'y',
      type: 'number',
    },
  })
  .option('time', {
    alias: 't',
    description: 'Tell the present Time',
    type: 'boolean',
  })
  .help()
  .alias('help', 'h').argv;

if (argv.time) {
  console.log('The current time is: ', new Date().toLocaleTimeString());
}

if (argv._.includes('redux')) {
  const year = argv.year || new Date().getFullYear();
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log(`${year} is a Leap Year`);
  } else {
    console.log(`${year} is NOT a Leap Year`);
  }
}

// const fs = require('fs');
// const path = require('path');

// module.exports = {
//   getCurrentDirectoryBase: () => {
//     return path.basename(process.cwd());
//   },

//   directoryExists: (filePath) => {
//     return fs.existsSync(filePath);
//   }
// };

console.log(argv);
