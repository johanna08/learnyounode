// console.log(process.argv);

function sumArray(array){
	var sum = 0;
	// console.log(process.argv[2]);
	for ( var i = 2; i < process.argv.length; i++ ){
		// console.log(+process.argv[i]);
		sum += +process.argv[i];
	}
	console.log(sum);
	return sum;
}

sumArray(process.argv);