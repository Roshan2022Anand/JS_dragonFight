//accessing  all the elements from the HTML file
const currentXp = document.getElementById("current-xp");
const currentWeapon = document.getElementById("current-weapon");
const currentHealth = document.getElementById("current-health");
const currentMoney = document.getElementById("current-money");
const currentPlace = document.getElementById("current-place");
const currentInfo = document.getElementById("current-info");
const demonStat = document.getElementById("demon-stats");
const demonName = document.getElementById("demon-name");
const demonHealth = document.getElementById("demon-health");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
//declaring the global variables
let xp = 0;
let health = 100;
let money = 50;
let weaponLvl = 0;
const stats=()=>{
    currentXp.innerText = xp; 
    currentHealth.innerText = health;
    currentWeapon.innerText = weapon[weaponLvl].name;
    currentMoney.innerText = money;
}
//created an object to store the information of the demons
let demons = [{name:"Goblin",damage:5,health:30,description:"Yes you defeted the goblin"},
{name:"Dragon",damage:20,health:300,description:"Yes you have won the game . you defeted the dragon"}];
//created an object to store the information of the weapons
let weapon = [
    {
        name:"Stick",
        damage:5
    },
    {
        name:"knif",
        damage:15
    },
    {
        name:"Dagger",
        damage:35
    },
    {
        name:"Sword",
        damage:70
    }
];
//created an object to store the information of the updates needed to be happend 
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
        name:"Dragon vally",
        buttons:["Attack" , "Run"],
        description: "Finally its time to face the dragon"
    }
];
//function to show the town screen
const toTown=()=>{
    btn2.style.display = "block";
    btn3.style.display = "block";
    demonStat.style.display = "none";
    currentPlace.innerText = update[0].name;
    currentInfo.innerText = update[0].description;
    btn1.innerText = update[0].buttons[0];
    btn2.innerText = update[0].buttons[1];
    btn3.innerText = update[0].buttons[2];
    btn1.onclick =  toStore;
    btn2.onclick =  toCave;
    btn3.onclick =  toDragon;
}
//function to show the store screen
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
//function to show the demons screen
const displayDemonStats=(name)=>{
    demonStat.style.display = "flex";
    if(name == "goblin"){
        demonName.innerText = "Goblin ";
        demonHealth.innerText = "30";
    }else{
        demonName.innerText = "Goblin ";
        demonHealth.innerText = "30";
    }
}
//function to show the cave screen
const toCave=()=>{
    displayDemonStats("goblin");
    currentPlace.innerText = update[2].name;
    currentInfo.innerText = update[2].description;
    btn1.innerText = update[2].buttons[0];
    btn2.innerText = update[2].buttons[1];
    btn3.style.display = "none";
    btn1.onclick =  function(){attack(0);};
    btn2.onclick =  toTown;
}
//function to show the dragon Vally screen
const toDragon=()=>{
    displayDemonStats("dragon");
    currentPlace.innerText = update[3].name;
    currentInfo.innerText = update[3].description;
    btn1.innerText = update[3].buttons[0];
    btn2.innerText = update[3].buttons[1];
    btn3.style.display = "none";
    btn1.onclick =  function(){attack(1);}
    btn2.onclick =  toTown;
}
//function to buy health for player
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
//function to buy weapon for player
const buyWeapon=()=>{
    if(money>=20){
        if(currentWeapon.innerText !== "Sword"){
            weaponLvl++;
            let commentsWeapon = ["Better than old one" , "one shot everyone" , "let's goooo!!" , "i'll stick it in their as my a**"]
            currentInfo.innerText = commentsWeapon[Math.floor(Math.random()*3)];
            money-=30;
            currentMoney.innerText = money;
            currentWeapon.innerText = weapon[weaponLvl].name;
        }else{
            currentInfo.innerText = "You have the strongest weapon Right now"
        }
    }else{
        currentInfo.innerText = "You don't have enough money to buy weapon .";
        currentMoney.classList.toggle("alert");
    }
}
//function to use the attck button
const attack=(x)=>{
    currentInfo.innerText = "eat it"
    //function used to decrement the health of the player according to the demons damage
    const decHealth=()=>{
        health-=demons[x].damage;
        currentHealth.innerText = health;
    }
    if(health>demons[x].damage){
        if(demons[x].health>weapon[weaponLvl].damage){
            demons[x].health-=weapon[weaponLvl].damage;
            decHealth();
            demonHealth.innerText = demons[x].health;
        }else{
            decHealth();
            demonHealth.innerText = "0";
            currentInfo.innerText = demons[x].description;
            btn1.innerText = "Return to Town"
            btn2.style.display = "none";
            winRestart(x);
            btn1.onclick = toTown;
        } 
    }else{
        currentHealth.innerText = "0";
        btn1.innerText = "restart";
        winRestart(x);
        btn1.onclick = lossRestart;
        btn2.style.display = "none";
        btn3.style.display = "none";
        currentInfo.innerText = "****You died****";
    }
}
//function to restart the game if the player dies
const lossRestart=()=>{
    health = 100;
    money = 50;
    xp = 0;
    weaponLvl = 0;
    stats();
    toTown();
}
//function to reset the statsof the defeated demons and add money and xp of the players
const winRestart=(x)=>{ 
    if(x == 0){
        demons[x].health = 30;
        money+=40;
        xp+=10;
    }else{
        demons[x].health = 300;
        money+=200;
        xp+=50;
    }
    stats();
}
//all the initial click event buttons are declared here
btn1.onclick = toStore;
btn2.onclick = toCave;
btn3.onclick = toDragon;
stats();