
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
        alert("Oggetto rimosso correttamente dal carrello");
    }
    updateDisplay();
});

function updateDisplay() {
    counterDisplayElem.innerHTML = counter;
};

updateDisplay();


// Azione sul pulsante Add to Cart
const cart = document.querySelector(".button-cart");

cart.addEventListener("click", () => {
    if (counter == 0) {
        alert("Nessun oggetto è nel carrello");
    }
    if (counter == 1) {
        alert ("Oggetto aggiunto al carrello.");
    }
    if(counter > 1) {
        alert ("Oggetti aggiunti al carrello.");
    }
});



