var url = require('url');
var querystring = require('querystring');

var urlObj = url.parse('http://examples.burningbird.net:8124/getfiles?file=main&file=core&tenent=alta');

console.log(urlObj);

console.log(url.format(urlObj));

var parsedObj = querystring.parse(urlObj.query);

console.log(parsedObj);

console.log(querystring.stringify(parsedObj));


