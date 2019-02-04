const capture = require('capture-chrome')
const fs = require('fs')

capture({
    url: 'https://michalmaminski.github.io/awesome-phrasal-verbs'
}).then(screenshot => {
    console.log(`${__dirname}`);
    console.log(fs.exists(`${__dirname}/output/`));
    // fs.writeFile(`${__dirname}/output/site-screenshot.png`, screenshot, { mode: 7, flag: "w+"}, (err) => {
    //     if (err) {
    //         console.log(err);
    //         process.exit(-1);
    //     }
    //     console.log('Screenshot from site generated with success.');
    //   });
    
}).catch((err) => {
    console.log(err);
    process.exit(-1);
});