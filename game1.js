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
let weapon = ["Stick" , "knif" , "Dagger" , "Sword"]
let weaponLvl = 0;
let money = 50;
currentWeapon.innerText = weapon[weaponLvl];
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
    btn3.style.display = "block";
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
    btn3.onclick =  buyWeapon;
}
const toCave=()=>{
    currentPlace.innerText = update[2].name;
    currentInfo.innerText = update[2].description;
    btn1.innerText = update[2].buttons[0];
    btn2.innerText = update[2].buttons[1];
    btn3.style.display = "none";
    // btn1.onclick =  attack;
    btn2.onclick =  toTown;
}
const toDragon=()=>{
    currentPlace.innerText = update[3].name;
    currentInfo.innerText = update[3].description;
    btn1.innerText = update[3].buttons[0];
    btn2.innerText = update[3].buttons[1];
    btn3.style.display = "none";
    // btn1.onclick =  attack;
    btn2.onclick =  toTown;
}
const buyHealth=()=>{
    if(money>20){
        let commentsHealth = ["Yummmmmmmm!!!" , "Ready to fight!" , "Give me some more" , "Feeling like i just born"];
        currentInfo.innerText = commentsHealth[Math.floor(Math.random()*4)];
        health+=10;
        money-=20;
        currentMoney.innerText = money;
        currentHealth.innerText = health;
    }else{
        currentInfo.innerText = "You don't have enough money to buy health .";
        currentMoney.classList.toggle("alert");
    }
}
const buyWeapon=()=>{
    if(money>20){
        if(weaponLvl < 3){
            weaponLvl++;
            let commentsWeapon = ["Better than old one" , "one shot everyone" , "let's goooo!!" , "i'll stick it in their as my a**"]
            currentInfo.innerText = commentsWeapon[Math.floor(Math.random()*3)];
            money-=30;
            currentMoney.innerText = money;
            currentWeapon.innerText = weapon[weaponLvl];
        }else{
            currentInfo.innerText = "You have the strongest weapon Right now"
        }
    }else{
        currentInfo.innerText = "You don't have enough money to buy health .";
        currentMoney.classList.toggle("alert");
    }
}
btn1.onclick = toStore;
btn2.onclick = toCave;
btn3.onclick = toDragon;