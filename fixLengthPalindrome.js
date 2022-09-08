/*7-40 produces valid, expected outputs but fails to exceed undefined performance specification in Leetcode. From 41 will be a second attempt. Intuition: the for loop is building an array of every palindrome from map1.set intLength to intLength +1 BEFORE it checks queries. Maybe: populate an array with every number between intL and intL+1; then take each queries index, go to that number, check for palindromeness, push or -1.*/
/**
 * @param {number[]} queries
 * @param {number} intLength
 * @return {number[]}
 */
 let kthPalindrome = function( queries, intLength) {
    let foo = [];
    let revisedArray = [];
    const numbersLengths = {
        1 : 1,
        2 : 10,
        3 : 100,
        4 : 1000,
        5 : 10000,
        6 : 100000, 
        7 : 1000000,
        8 : 10000000,
        9 : 100000000,
        10: 1000000000,
        11: 10000000000,
        12: 100000000000,
        13: 1000000000000,
        14: 10000000000000,
        15: 100000000000000
    }
    
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
    

    for (var i = numbersLengths[intLength]; i < numbersLengths[intLength + 1]; i++) {
    
        if(isPalindrome(i)){
            foo.push(i)
        }   
    };
    console.log(foo)
    
    for(query of queries) {
        if(query >= numbersLengths[intLength + 1]) {
            query = -1;
            revisedArray.push(query)
        } else {
            revisedArray.push(query)  
        }
    }
    console.log(revisedArray)
    return revisedArray.map(i => foo[i-1] ?? -1); 
      
 }  



//  const map1 = new Map();
//  map1.set
    //  ('1' , 1).set
    //  ('2' , 10).set
    //  ('3' , 100).set
    //  ('4' , 1000).set
    //  ('5' , 10000).set
    //  ('6' , 100000).set
    //  ('7' , 1000000).set
    //  ('8' , 10000000).set
    //  ('9' , 100000000).set
    //  ('10', 1000000000).set
    //  ('11', 10000000000).set
    //  ('12', 100000000000).set
    //  ('13', 1000000000000).set
    //  ('14', 10000000000000).set
    //  ('15', 100000000000000)