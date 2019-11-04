function generateArrayRandomNumber(arr,min, max) {
    var totalNumbers = max - min + 1,
        arrayTotalNumbers = [],
        outputArr = [],
        arrayRandomNumbers = [],
        tempRandomNumber;
    while (totalNumbers--) {
        arrayTotalNumbers.push(totalNumbers + min);
    }
    while (arrayTotalNumbers.length) {
        tempRandomNumber = Math.round(Math.random() * (arrayTotalNumbers.length - 1));
        arrayRandomNumbers.push(arrayTotalNumbers[tempRandomNumber]);
        arrayTotalNumbers.splice(tempRandomNumber, 1);
    }
    for (let i = 0; i < 5; i++) {
        outputArr[i] =arrayRandomNumbers[i];
    }

    let test =[];

    for (let i = 0; i < outputArr.length; i++){
        test[i] = arr[outputArr[i]];
    } 
    return test;
}


// let arr = [{id:0},{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8}]

// const test = generateArrayRandomNumber(arr,0,arr.length);
// console.log(test);



module.exports = ("randomArr", generateArrayRandomNumber)
