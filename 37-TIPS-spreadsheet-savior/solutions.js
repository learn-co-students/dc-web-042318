console.log("TIPS");

//Given nested array, iterate through each row,
//find the difference between Max and Min,
//add them up as the checksum, and return

//Breaking down the Problem
//For each row, find the Max
//For each row, find the Min
//For each (row),
//find difference, add them up as the checksum,
//and return

var data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
];

//Find Max value given an array
function findMax(arr){
  //sort the array
  //Math.max
  //array.reduce
  //use for loops and if statements
  //return Math.max(...arr);
  return arr.reduce(function(val, current){
    return Math.max(val, current);
  })

}

//Find Min
function findMin(arr){
  //sort the array
  //Math.min
  //array.reduce
  // return Math.min(...arr);
  return arr.reduce(function(val, current){
    return Math.min(val, current);
  })
}

function findCheckSum(data){
  let checkSum = 0;
  data.forEach(function(row){
    checkSum += findMax(row)-findMin(row);
  });
  return checkSum;
}
