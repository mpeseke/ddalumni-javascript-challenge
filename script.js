let string = "This is a test string";


let reverseSentence = reverseBySeparator(string, "");

let reverseEachWord = reverseBySeparator(reverseSentence, " ");


function reverseBySeparator(string, separator) {
    return string.split(separator).reverse().join(separator);
}

console.log(reverseSentence, " ", reverseEachWord);