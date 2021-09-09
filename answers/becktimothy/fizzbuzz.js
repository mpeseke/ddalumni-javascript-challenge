const fizzBuzz = () => {
    for(i=0;i<100;i++){
        let reply = "";
        if(i%3===0){reply+='Fizz'}
        if(i%5===0){reply+='Buzz'}
        console.log(reply===""?i:reply);
    }
}
//fizzBuzz()