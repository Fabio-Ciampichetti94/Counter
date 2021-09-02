
const onClick = document.querySelector('.click');
const display = document.querySelector('.number');

// creo il bottone "+"
let btnPlus = document.createElement('button');
btnPlus.textContent = '+';
onClick.appendChild(btnPlus);
btnPlus.setAttribute('class', 'styles');

// creo il bottone "-"
let btnLess = document.createElement('button');
btnLess.textContent = '-';
onClick.appendChild(btnLess);
btnLess.setAttribute('class', 'styles');

// creo il contatore
let viewNumber = document.createElement('p'); 
viewNumber.textContent = '0';
display.appendChild(viewNumber);
viewNumber.setAttribute('class', 'number');


// passaggio per creare l'incremento e il decremento del counter
const counterDisplayElem = document.querySelector('.number');

let counter = 0;

btnPlus.addEventListener("click",()=> {
    counter++;
    updateDisplay();
});

btnLess.addEventListener("click",()=> {
    if(counter != 0) {  //creo questa condizione affinchè il counter non vada sotto lo zero
        counter--;
    }
    updateDisplay();
});

function updateDisplay() {
    counterDisplayElem.innerHTML = counter;
};

updateDisplay();

// creo il messaggio di aggiunta al carrello se si clicca il pulsante Add to Cart
const buttons = document.querySelector(".button-cart");

buttons.addEventListener("click", function() {
    alert("L'oggetto è stato aggiunto al carrello!");
})


