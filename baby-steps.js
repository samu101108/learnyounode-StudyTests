var index = 2;
var sum = 0;

while(process.argv[index]){
	sum = sum + Number(process.argv[index]);
	++index
}

console.log(sum);



//Here is the official solution:
/*

 var result = 0
    
    for (var i = 2; i < process.argv.length; i++) {
      result += Number(process.argv[i])
    }
    
    console.log(result)


*/
