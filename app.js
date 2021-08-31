'use strict';
let container = document.getElementById('container')
let table = document.createElement('table');
container.appendChild(table);
let carsIcon = ['images/bmw.jpg','images/ford.jpg','images/kia.jpg']
let carsArray = [];

function Cars(customerName,carModel,price){
this.customerName = customerName;
this.carModel = carModel;
this.price = price; 
carsArray.push(this);

}


function saveToLocalStorage(){
    let data = JSON.stringify(carsArray);
    localStorage.setItem('cars',data)
    
}

function readFromLocalStoage(){
    let stringObj  = localStorage.getItem('cars');
    let normalObj =  JSON.parse(stringObj);
    if(normalObj){
        carsArray = normalObj
    }
    
}

// readFromLocalStoage();

console.log(carsArray);
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }


let myForm = document.getElementById('myForm');

myForm.addEventListener('submit',showAll)
function showAll(event){
    event.preventDefault();
    let name = event.target.name.value;
    let car = event.target.cars.value;
    let price = getRandomIntInclusive(1000, 10000);
    let newOrder = new Cars (name,car,price)
    
 
    newOrder.render();
    saveToLocalStorage();

}



Cars.prototype.render = function(){

    let images = document.createElement('img');
    images.setAttribute('src',carsIcon[0])
    

    let thEl = document.createElement('tr')
    table.appendChild(thEl);
    thEl.textContent = '';
    let tdEl = document.createElement('th')
    thEl.appendChild(tdEl)
    tdEl.textContent = `${images}`/////////
    let tdEl1 = document.createElement('th')
    thEl.appendChild(tdEl1)
    tdEl1.textContent = `customer name: (${this.customerName}) .. car model : (${this.carModel}) car price:(${this.price})`

  

}

creatHeader();
// showAll();


















function creatHeader(){
let thEl = document.createElement('tr')
table.appendChild(thEl);

let tdEl = document.createElement('th')
thEl.appendChild(tdEl)
tdEl.textContent = 'order image'
let tdEl1 = document.createElement('th')
thEl.appendChild(tdEl1)
tdEl1.textContent = 'order details'

}
