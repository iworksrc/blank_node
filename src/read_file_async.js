var fs = require('fs');

fs.readFile('assets/text.json', function (err, contents) {
    if(err){
        console.log(err);
    }

    var file = contents;
    console.log(file);
});