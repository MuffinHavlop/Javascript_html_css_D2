function getMoreCoffee(){
    coffeeCupCount += 1;
    console.log('Thanks for having our coffee!, dont drink too much!!!')
    return coffeeCupCount;
}

let lackingCoffee = false; 
let coffeeCupCount = 0;