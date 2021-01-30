// function FindIntersection(strArr) {
//     let arr0 = strArr[0].split(", ");
//     let arr1 = strArr[1].split(", ");
//     let newArr = [];

//     for (let i = 0; i < arr0.length; i++) {
//         for (let j = 0; j < arr1.length; j++) {
//             if (arr0[i] == arr1[j]) {
//                 newArr.push(arr0[i]);
//                 break;
//             }
            
//         }
        
//     }

//     if (newArr.length == 0) {
//         return false;
//     } else {
//         return newArr.join(", ")
//     }
// }
// // keep this function call here 
// console.log(FindIntersection(readline()));

function LetterCapitalize(str) {
    let eachWord = str.split(" ");
    eachWord.forEach(element => {
        element.charAt(0).toUpperCase();
    });
    // code goes here  
    return str;
}

// keep this function call here 
console.log(LetterCapitalize(readline()));