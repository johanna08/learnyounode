var fs = require('fs');
//read the file(process.argv[2]) 
var buffer = fs.readFileSync(process.argv[2]);
//and convert it to a string
var str = buffer.toString();
//count the # of new lines in the file
var lines = str.split('\n');
//subtract 1 from the length because test says to 
console.log(lines.length - 1);