

var nums = [1,2,3,4,5,'a' ,'b','c']
function arraySort(anArray) {
    // Your code here
    
    var evens = [];
    var odds = [];
    var char = [];

    for (var i = 0; i < nums.length; i++)
    {
        if(nums[i] % 2===0) {
        evens.push(nums[i]);


        } else if (nums[i]%2===1) {
        odds.push(nums[i]);
        } 
        
        else {
        char.push(nums[i]);
        }
        }
    













}




//module.exports = arraySort;