"use strict";
const axios = require('axios');
console.log('Calling Travis...');

axios.post(`https://api.travis-ci.org/repo/MichalMaminski%2Fawesome-phrasal-verbs/requests`, {
    request: {
        message: `Trigger build at latest commit from readme-image-maker`,
        branch: 'readme-image-maker'
    }
}, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Travis-API-Version": "3",
            "Authorization": `token ${process.env.TRAVIS_API_TOKEN}`,
        }
    })
    .then(() => {
        console.log("Triggered build of readme-image-maker");
    })
    .catch((err) => {
        console.error(err);

        process.exit(-1);
    });