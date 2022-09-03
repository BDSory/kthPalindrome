//  //define a palindrome
    //generate a list of all the palindromes of an intLength; cap necessary? Guess not. 
    //take each element of queries, it's an index 
    //copy the value of the Pdromes of intLength array @ each queries element-as-index and push
    //to new array. But first try to just return these values without a push. 

    //1: try to spit out all the numbers of int length sequentially.
    //2. implement logic to sort/filter? that array for palindromes
    //3. take the ith index from elements of queries array and further filter 
//Hard problems:
//1. intLength is misleading me. It is the length of a (do we use Base 10?) base 10 number, e.g. 3 is XXX. Computers use binary.
//..con't: 'given a number of digits, generate the array of all the numbers that have that number of digits...'3' gives [100,101...999]


/**
 * @param {number[]} queries
 * @param {number} intLength
 * @return {number[]}
 */
 var kthPalindrome = function( queries, intLength) {
    var foo = [];
    let resultArray = [];
    const map1 = new Map();
    map1.set
        ('1' , 1).set
        ('2' , 10).set
        ('3' , 100).set
        ('4' , 1000).set
        ('5' , 10000).set
        ('6' , 100000).set
        ('7' , 1000000)
   
    for (var i = map1.get(intLength.toString()); i < map1.get((intLength+1).toString()); i++) {
        const a = i.toString().split('').join('');
        const b = i.toString().split('').reverse().join('')
        if (a === b) {
            foo.push(i)
        }  
    };
    
    return queries.map(i => foo[i]);
 
 }


//below will return an array of palindromes up to intLength; not really the point ;
// var kthPalindrome = function(queries, intLength) {
    // 
        // 
        // const fan = [];
    // 
        // for (var i = 1; i <= intLength; i++) {
            // const a = i.toString().split('').join('');
            // const b = i.toString().split('').reverse().join('')
            // if (a === b) {
                // foo.push(i)
            // }     
        // }
        // for(query of queries) {
            // fan.push(foo.indexOf(query))
        // }
    // 
    // console.log(foo)    
    // // return fan;   