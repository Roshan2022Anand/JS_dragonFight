//accessing  all the elements from the HTML file
const currentXp = document.getElementById("current-xp");
const currentWeapon = document.getElementById("current-weapon");
const currentHealth = document.getElementById("current-health");
const currentMoney = document.getElementById("current-money");
const currentPlace = document.getElementById("current-place");
const currentInfo = document.getElementById("current-info");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
let xp = 0;
let health = 100;
let weapon = "Stick";
let money = 50;
let update = [
    {
        name:"Town",
        buttons:["Store" , "Go to cave" , "fight dragon"],
        description: "You are in the town , you can see the cave and the store"
    },
    {
        name:"Store",
        buttons:["Go to town" , "Buy 10 Health(20 gold)" , "Buy weapon(30 gold)"],
        description: "You are in the shop buy what ever you want ."
    },
    {
        name:"Cave",
        buttons:["Attack" , "Run"],
        description: "There's the goblin , Attack!!"
    },
    {
        name:"Dragon",
        buttons:["Attack" , "Run"],
        description: "Finally its time to face the dragon"
    }
];
const toTown=()=>{
    currentPlace.innerText = update[0].name;
    currentInfo.innerText = update[0].description;
    btn1.innerText = update[0].buttons[0];
    btn2.innerText = update[0].buttons[1];
    btn3.innerText = update[0].buttons[2];
    btn1.onclick =  toStore;
    btn2.onclick =  toCave;
    btn3.onclick =  toDragon;
}
const toStore=()=>{
    currentPlace.innerText = update[1].name;
    currentInfo.innerText = update[1].description;
    btn1.innerText = update[1].buttons[0];
    btn2.innerText = update[1].buttons[1];
    btn3.innerText = update[1].buttons[2];
    btn1.onclick =  toTown;
    btn2.onclick =  buyHealth;
    btn3.onclick =  buyGold;
}
const buyHealth=()=>{
    
}
btn1.onclick = toStore;
btn2.onclick = toCave;
btn3.onclick = toDragon;