var array = [];

function theBeatlesPlay(musicians, instruments) {
  for (let i = 0; i < musicians.length; i++) {
      array.push (`${musicians[i]} plays ${instruments[i]}`);
  }
return array;
}

function johnLennonFacts(facts) {
  var newFacts = [];
  let n = 0;
  
  while (n < facts.length) {
    newFacts[n] = facts[n] + "!!!";
    n++;
  }
  
return newFacts;
}

function iLoveTheBeatles(num) {
  var arr = [];
  let i = 7; 
  
    //function incrementalVar() {
      //i = i + 1;
      //return i;
    //}
    
      do {arr.unshift("I love the Beatles!");
      }
      while (i < 15);
      
  return arr;
}