let kthPalindrome = function( queries, intLength) {
  const foo = [];
  const map1 = new Map();
  map1.set
      ('1' , 1).set
      ('2' , 10).set
      ('3' , 100).set
      ('4' , 1000).set
      ('5' , 10000).set
      ('6' , 100000).set
      ('7' , 1000000).set
      ('8' , 10000000).set
      ('9' , 100000000).set
      ('10', 1000000000).set
      ('11', 10000000000).set
      ('12', 100000000000).set
      ('13', 1000000000000).set
      ('14', 10000000000000).set
      ('15', 100000000000000)

  const isPalindrome = x => {
  if (x < 0) return false

  let reversed = 0, y = x

  while (y > 0) {
      const lastDigit = y % 10
      reversed = (reversed * 10) + lastDigit
      y = (y / 10) | 0
  }
  return x === reversed
  }

  for (var i = map1.get(intLength.toString()); i < map1.get((intLength+1).toString()); i++) {
      if(isPalindrome(i)){
          foo.push(i)
      }
  };
  
  const isInRange = x => {
      if(x < map1.get(intLength.toString()).length || x > map1.get((intLength+1).toString())){
          return false;
      }
      return true;
    };
    for(let i = 0; i < queries.length; i++) {
      if(isInRange(i)){
        queries.push(i)
      }
  
    return queries.map(i => foo[i-1] ?? -1);  
  }

  
  }
  

