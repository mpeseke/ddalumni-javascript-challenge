
for(let i = 0; i <= 100; i++){
    if(i % 2){
        console.log('fizz');
    }else if(i%3){
        console.log('buzz');
    }else if(i%2 && i%3){
        console.log('fizz buzz');
    }
}

function reverseString(word){
    return word.split('').reverse().join("");
}

function analyzeAnagrams(word1, word2){
    return word1 == reverseString(word);
}

function factorial(number){
    let factorial = 1;
    for(let i = number; i > 0; i--){
        factorial = factorial * i;
    }
}

function httpRequest(){
    fetch('google.com')
        .then(result =>{
            console.log('result', result);
        })
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
    console.log('half 1', half1, 'half2', half2);
    console.log('half 1', half1.reduce(reducer, 0), 'half2', half2.reduce(reducer, 0));
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

arrayQuestion([1,2,3,4,3,2,1]);
