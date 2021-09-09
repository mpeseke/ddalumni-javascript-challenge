const fetch = require('node-fetch');

for(let i = 0; i <= 100; i++){
    console.log(i);
    if(i%2 && i%3){
        console.log('fizzbuzz');
    }else if(i%2){
        console.log('fizz');
    }else if(i%3){
        console.log('buzz');
    }
}

function reverseString(word){
    return word.split('').reverse().join("");
}

function analyzeAnagrams(word1, word2){
    console.log(word1 == reverseString(word2));
}

function factorial(number){
    let factorial = number == 0 ? 0 : 1;
    for(let i = number; i > 0; i--){
        factorial = factorial * i;
    }
    console.log('factorial: ', factorial);
}

function httpRequest(){
    fetch('http://example.com')
        .then(result => result.text())
        .then(data => {console.log('data', data)})
        .catch(err =>{
            console.log('error on fetch', err);
        })
}

function reducer(num1, num2){
    return num1 + num2;
}

function arrayQuestionAnalyzer(arrayOfInts, index){
    arrayOfInts.splice(index, 1);
    const half1 = arrayOfInts.slice(0, index);
    const half2 = arrayOfInts.slice(index);
    return half1.reduce(reducer, 0 ) == half2.reduce(reducer, 0);
}


function arrayQuestion(arrayOfInts){
    let answer = false;
    arrayOfInts.forEach((num, index) =>{
        if(arrayQuestionAnalyzer([...arrayOfInts], index)){
           answer = num; 
        }
    });
    console.log(answer);
}

function ozToLb(oz){
    console.log(`${oz} ounces is equal to  ${oz/16} pounds`);
}

console.log(`Answer to Array Question: ${arrayQuestion([1,2,3,4,3,2,1])}`);

factorial(5);
httpRequest();
console.log('anagram answer:');
analyzeAnagrams('hello', 'olleh');
ozToLb(32);