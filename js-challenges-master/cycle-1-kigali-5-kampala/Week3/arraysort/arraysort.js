

function arraySort(anArray) {
    // Your code here
    if(Array.isArray(anArray)){
    
        let arrob ={ evens:[], odds:[], chars:[]};


        for(i = 0; i < anArray.length; i++) {
          if(anArray[i]%2 == 0) {
              arrob.evens .push(anArray[i]); 
           }
          else if (anArray[i]%2 == 1) {
            arrob.odds.push(anArray[i]);
          }
          else {
            arrob.chars.push(anArray[i]);
          }  }
      arrob.evens.sort();
      arrob.odds.sort();
      arrob.chars.sort();
      return arrob;

    }
    else { return "invalid input"}
    }

       
module.exports = arraySort;
    
 
