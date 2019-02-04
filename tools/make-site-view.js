const fs = require('fs');
var screenshot = require('electron-screenshot-service');
 
screenshot({
  url : 'https://michalmaminski.github.io/awesome-phrasal-verbs',
  width : 1024,
  height : 768,
  page: true,
  delay: 100
})
.then(function(img){
  fs.writeFile('./tools/output/site-view.png', img.data, function(err) {
      if (err) {
          throw err;
      }
    screenshot.close();
  });
});