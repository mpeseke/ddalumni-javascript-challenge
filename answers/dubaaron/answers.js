

anagrams();
fizzbuzz();
do_factorials();
http_request();


function anagrams() {
    console.log("Anagrams!");

    let haribol = "haribol";
    let haribol_anagram = "lobirah";
    let gauranga = "guaranga";
    
    function is_anagram(str1, str2) {
        
        let str1_reversed = str1.split("").reverse().join("");
        return str1_reversed == str2;
    }
    
    console.log("Is '" + haribol + "' anagram of '" + haribol_anagram + "'? " + is_anagram(haribol, haribol_anagram));
    console.log("Is '" + haribol + "' anagram of '" + gauranga + "'? " + is_anagram(haribol, gauranga));
    
}


function fizzbuzz() {
    console.log("\n\nFizzbuzz!");

    for (let i = 1; i <= 100; i++) {
        let output_line = i;
        if (0 == i%2) { output_line += " Fizz!"; }
        if (0 == i%3) { output_line += " Buzz!"; }
        console.log(output_line);
    }
    
}


function do_factorials() {



    function factorial(num) {
    
        if (num === 0 || num === 1) {
            return 1;
        }
        for (let i = num - 1; i > 0; i--) {
            num *= i;
        }
        return num;
    }
    


    let test_factorials = {
        1: 1,
        2: 2,
        3: 6,
        4: 24,
        5: 120,
        10: 3628800,
    }

    for (let key in test_factorials) {
        expected = test_factorials[key];
        console.log("\nFactorial of " + key + " should be " + expected + " ...");
        console.log(factorial(key));
        
        console.assert(factorial(key) == expected);

    }




}



function http_request(url) {

    XMLHttpRequest.open("GET", url, false);
    XMLHttpRequest.send();

}