let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
let excitement = "";
/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray, excitement) {
    let buildMeUp = "";
    // Each time the for loop executes, you're going to add one more word to the buildMeUp string
    for (let i = 0; i < theWordArray.length; i++) {
        if (i % 3 === 0 && i != 0) {
        // Concatenate the new word onto buildMeUp
        buildMeUp += `${theWordArray[i]} ${excitement} `;
        } else {
        buildMeUp += `${theWordArray[i]} `;
        }
        console.log(buildMeUp);
    }
}
// Invoke the function and pass in the array
addExcitement(sentence, "!")

// convert to fat arrow function
const addExcitementFatArrow = (theWordArray, excitement) => {
let buildMeUp = "";
    for (let i = 0; i < theWordArray.length; i++) {
        if (i % 3 === 0 && i != 0) {
        buildMeUp += `${theWordArray[i]} ${excitement} `;
        } else {
        buildMeUp += `${theWordArray[i]} `;
        }
        console.log(buildMeUp);
    }
}

addExcitementFatArrow(sentence, "%%")