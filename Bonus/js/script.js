function nextSlide()
{
    if (itemActive < imagesArray.length - 1) {

        items[itemActive].classList.remove(`active`);
        circles[itemActive].classList.remove('active');
        
        itemActive += 1 
        // itemActive ++

        circles[itemActive].classList.add('active');
        items[itemActive].classList.add(`active`)
    }
    
    else {
        items[itemActive].classList.remove(`active`);
        circles[itemActive].classList.remove('active');
        
        itemActive= 0
        circles[itemActive].classList.add('active');
        items[itemActive].classList.add(`active`)

    }
}



//Creo array immagini
const imagesArray = [
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp"
]

//Creiamo dinamicamente i div con le immagini del carosello
let itemsContent = '';

for (let i = 0; i < imagesArray.length; i++) {
    itemsContent += `<div class="item">
        <img src="./img/${imagesArray[i]}">
    </div>`
}

//inseriamo le immagini nel div che le deve contenere
const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

//Prendiamo la prima immagine dell'array e la rendiamo attiva

//const items = document.querySelector('.item'); //ALTERNATIVA

const items = document.getElementsByClassName('item');
let itemActive = 0;

items[itemActive].classList.add('active');

//rendo attivo anche il primo cerchio di navigazione

const circles = document.getElementsByClassName('circle');

circles[itemActive].classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


// ********************* ESERCIZIO*************************

next.addEventListener('click',  nextSlide())
    //verifico l'elemento attivo (itemActive)
    //incremento il suo valore di 1
    //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
    //stessa cosa per i cerchi
    //verifico l'elemento attivo (itemActive)
    
   

;

prev.addEventListener('click', function () {
    //verifico l'elemento attivo (itemActive)
    //decremento il suo valore di 1
    //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
    //stessa cosa per i cerchi

    if (itemActive > 0) {

        items[itemActive].classList.remove(`active`);
        circles[itemActive].classList.remove('active');
        
        
        itemActive -=1 
        circles[itemActive].classList.add('active');
        items[itemActive].classList.add(`active`)
    }
    
    else {
        items[itemActive].classList.remove(`active`);
        circles[itemActive].classList.remove('active');
        
        itemActive = items.length -1
        circles[itemActive].classList.add('active');
        items[itemActive].classList.add(`active`)

    }

})


let myInterval = setInterval (nextSlide,2000)

document.getElementById(`play`).addEventListener(`click`, function(){
    myInterval = setInterval (nextSlide,2000)
})

document.getElementById(`pause`).addEventListener(`click`, function(){
    clearInterval(myInterval)
})