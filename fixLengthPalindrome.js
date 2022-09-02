//  //define a palindrome
    //generate a list of all the palindromes of an intLength; cap necessary? Guess not. 
    //take each element of queries, it's an index 
    //copy the value of the Pdromes of intLength array @ each queries element-as-index and push
    //to new array. But first try to just return these values without a push. 

    //1: try to spit out all the numbers of int length sequentially.
    //2. implement logic to sort/filter? that array for palindromes
    //3. take the ith index from elements of queries array and further filter 
console.log('hello world')
let generator = function(intLength){
    var foo = [];

    for (var i = intLength-intLength +1; i <= intLength; i++) {
        foo.push(i);
    }
    console.log(foo)
    
    for(element in foo){
        console.log(typeof element)
        console.log(typeof foo)
    }
}



// var kthPalindrome = function(queries, intLength) {
//     let generator = function(intLength){
//         var foo = [];

//         for (var i = 1; i <= intLength; i++) {
//             foo.push(i);
//             console.log(foo)
//         }
//     }
// }