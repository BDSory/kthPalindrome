//7-39 produces valid, expected outputs but fails to exceed undefined performance specification in Leetcode. From 41 will be a second attempt. Intuition: 
/**
 * @param {number[]} queries
 * @param {number} intLength
 * @return {number[]}
 */
 var kthPalindrome = function( queries, intLength) {
    var foo = [];
    let resultArray = [];
    let orderedQueries = [];
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
   
    for (var i = map1.get(intLength.toString()); i < map1.get((intLength+1).toString()); i++) {
        const a = i.toString().split('').join('');
        const b = i.toString().split('').reverse().join('')
        if (a === b) {
            foo.push(i)
        }  
    };
    console.log(foo)
    //orderedQueries = queries.sort((a,b) => a -b)
    //console.log(orderedQueries)
    return queries.map(i => foo[i-1] ?? -1);
 
 }

