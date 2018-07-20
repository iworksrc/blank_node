var spawn  = require('child_process').spawn,
    pwd = spawn('pwd', ['-g']);
pwd.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
});

pwd.stderr.on('data', function (data) {
    console.log('std error: ' + data);
});

pwd.on('exit', function (code) {
    console.log('pwd exited with code: ' + code);
});

