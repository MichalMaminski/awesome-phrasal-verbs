const capture = require('capture-chrome')
const fs = require('fs')

capture({
    url: 'https://michalmaminski.github.io/awesome-phrasal-verbs'
}).then(screenshot => {
    fs.writeFileSync(`${__dirname}/output/site-screenshot.png`, screenshot);
    console.log('Screenshot from site generated with success.');
}).catch((err) => {
    console.log(err);
    process.exit(-1);
});