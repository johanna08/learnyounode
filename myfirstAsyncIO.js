var fs = require('fs');
var file = process.argv[2];
fs.readFile(file, function(err, contents) {
	var lines = contents.toString().split('\n');
	console.log(lines.length - 1);
});

//didnt realize we didnt need to do this one!