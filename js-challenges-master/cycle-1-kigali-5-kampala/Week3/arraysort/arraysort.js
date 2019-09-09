

var nums = [1,2,'a',3,'b',4,'c',5,'e',6,'f', 7, 8];
arraySort(nums);

function arraySort(anArray) {
    // Your code here
    
    var evens = [];
    var odds = [];
    var chars = [];

    for (var i = 0; i < anArray.length; i++)
    {

       if(anArray[i] % 2===0) {
        evens.push(anArray[i]);
     

        } else if (anArray[i]%2===1) {
        odds.push(anArray[i]);
        } 
        
        else {
        chars.push(anArray[i]);
        }
 
   }

   alert(['Evens' + " " + ":" + " " + evens] );
    alert(['Odds' + " " + ":" + " " + odds]);
    alert(['Chars' + " " + ":" + " " + chars]);
    
  
}



//module.exports = arraySort;