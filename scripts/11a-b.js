// 10a-b
const nums = [10,20,30,40,50,5];
const texts = ['Dre', 'Shady', 'Treach', 'Good'];

// nums[nums.length-1] = 99; 

console.log(nums); 

// 10b
function getLastValue(x){
  return (x[x.length-1]);
}

console.log(getLastValue(nums));
console.log( getLastValue(texts));