var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
    for( var i=0;i<numbers.length; i++){
        if(numbers[i]>=0){
            countPositives += 1;

        }
    }
// your code here!
    
console.log("there are " + countPositives + " positive values");