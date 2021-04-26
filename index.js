const core = require('@actions/core');
const github = require('@actions/github');
var fs = require('fs'); 

try {
    const filename = core.getInput('filename');
    const content = core.getInput('content');

    fs.writeFile(filename, content,function (err, file) {
        if (err) throw err;
        console.log('Saved!');
      }); 
} catch (error) {
  core.setFailed(error.message);
}