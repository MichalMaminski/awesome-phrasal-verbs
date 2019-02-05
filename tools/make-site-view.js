const capture = require('capture-chrome')
const fs = require('fs')

capture({
    url: 'https://michalmaminski.github.io/awesome-phrasal-verbs'
}).then(screenshot => {
    let outputDir = `${__dirname}/output/`;
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }
    fs.writeFileSync(`${__dirname}/output/site-screenshot.png`, screenshot);
}).catch((err) => {
    console.log(err);
    process.exit(-1);
});