const buttonOne = document.querySelector(".button-1");
const buttonTwo = document.querySelector(".button-2");
const buttonThree = document.querySelector(".button-3");
let number = document.querySelector('.html-number');
let levelNumber = document.querySelector('.level');
let xpNumber = document.querySelector(".xp-number");
let xpSlashText = document.querySelector(".xp-slash-text");
let miningArea = document.querySelector(".mining-area")

// let level_number = 1
// let xp_counter = 0;

let counter = localStorage.getItem('pavelCoins') || 0
let xp_counter = localStorage.getItem('xpCounter') || 0
let xp_slash_text = localStorage.getItem('SlashTextXp') || '/200'
let level_number = localStorage.getItem("levelLocalNumber") || 1

number.innerHTML = counter
xpNumber.innerHTML = xp_counter
xpSlashText.innerHTML = xp_slash_text
levelNumber.innerHTML = level_number

if (counter >= 10) {
    buttonTwo.classList.add('fenete')
}

if (counter >= 1000) {
    buttonThree.classList.add('fenete')
}

if (level_number == 2) {
    xp_slash_text = '/1200'.toString()
    xpSlashText.innerHTML = xp_slash_text
    localStorage.setItem("SlashTextXp", xp_slash_text.toString()) 
}

if (level_number == 3) {
    miningArea.classList.add('fenete')
}

function levelOneIncrease() {
    if (level_number == 1) {
        if (xp_counter == 200 || xp_counter > 200) {
            xp_counter = 0
            xpNumber.innerHTML = xp_counter
            level_number = 2
            levelNumber.innerHTML = level_number
            localStorage.setItem('levelLocalNumber', level_number)
        }
    }
    if (level_number == 2) {
        xp_slash_text = '/1200'.toString()
        xpSlashText.innerHTML = xp_slash_text
        localStorage.setItem("SlashTextXp", xp_slash_text.toString()) 
    }
}

function levelTwoIncrease() {
    if (level_number == 2) {
        if (xp_counter == 1200 || xp_counter > 1200) {
            xp_counter = 0
            xpNumber.innerHTML = xp_counter
            level_number = 3
            levelNumber.innerHTML = level_number
            localStorage.setItem('levelLocalNumber', level_number)
        }
    }
    if (level_number == 3) {
        xp_slash_text = '/4200'.toString()
        xpSlashText.innerHTML = xp_slash_text
        localStorage.setItem("SlashTextXp", xp_slash_text.toString()) 
    }
}

buttonOne.addEventListener('click', () => {
  counter = parseInt(counter) + 1;
  number.innerHTML = counter
  localStorage.setItem('pavelCoins', counter.toString())
  levelNumber.innerHTML = level_number
  localStorage.setItem('levelLocalNumber', level_number)
  xp_counter = parseInt(xp_counter) + 50
  xpNumber.innerHTML = xp_counter
  localStorage.setItem('xpCounter', xp_counter.toString())
  localStorage.setItem('SlashTextXp', xp_slash_text.toString())
  if (counter >= 10) {
    buttonTwo.classList.add('fenete')
  }
  if (level_number == 3) {
    miningArea.classList.add('fenete')
  }
  levelOneIncrease()
  levelTwoIncrease()
})

buttonTwo.addEventListener("click", () => {
    counter = parseInt(counter) + 20;
    number.innerHTML = counter
    localStorage.setItem('pavelCoins', counter.toString())
    levelNumber.innerHTML = level_number
    localStorage.setItem('levelLocalNumber', level_number)
    xp_counter = parseInt(xp_counter) + 50
    xpNumber.innerHTML = xp_counter
    localStorage.setItem('xpCounter', xp_counter.toString())
    localStorage.setItem('SlashTextXp', xp_slash_text.toString())
    if (counter >= 1000) {
      buttonThree.classList.add('fenete')
    }
    if (level_number == 3) {
        miningArea.classList.add('fenete')
    }
    levelOneIncrease()
    levelTwoIncrease()
})

buttonThree.addEventListener("click", () => {
    counter = parseInt(counter) + 25;
    number.innerHTML = counter
    localStorage.setItem('pavelCoins', counter.toString())
    levelNumber.innerHTML = level_number
    localStorage.setItem('levelLocalNumber', level_number)
    xp_counter = parseInt(xp_counter) + 50
    xpNumber.innerHTML = xp_counter
    localStorage.setItem('xpCounter', xp_counter.toString())
    localStorage.setItem('SlashTextXp', xp_slash_text.toString())
    if (counter >= 1000) {
      buttonThree.classList.add('fenete')
    }
    if (level_number == 3) {
        miningArea.classList.add('fenete')
    }
    levelOneIncrease()
    levelTwoIncrease()
})

//mine classes:

const mineBtn = document.querySelector(".mine-btn");
const sellCopperBtn = document.querySelector(".sell-copper-btn")
const sellIronBtn = document.querySelector(".sell-iron-btn")
const sellGoldBtn = document.querySelector(".sell-gold-btn")
const sellDiamondBtn = document.querySelector(".sell-diamond-btn")
let diamontNumber = document.querySelector(".diamont-number")
let goldNumber = document.querySelector(".gold-number")
let ironNumber = document.querySelector(".iron-number")
let copperNumber = document.querySelector(".copper-number")

//////////////

diamond_counter = 0;
gold_counter = 0;
iron_counter = 0;
copper_counter = 0;

mineBtn.addEventListener("click", () => {
    computerOptionGenerator = Math.floor(Math.random() * 10001);
    if (computerOptionGenerator >= 0 && computerOptionGenerator < 4000) {
        copper_counter = copper_counter + 1
        copperNumber.innerHTML = copper_counter
    }
    if (computerOptionGenerator >= 4000 && computerOptionGenerator <= 9000) {
        iron_counter = iron_counter + 1
        ironNumber.innerHTML = iron_counter
    }
    if (computerOptionGenerator == 9943) {
        gold_counter = gold_counter + 1
        goldNumber.innerHTML = gold_counter
    }
    if (computerOptionGenerator == 9963) {
        diamond_counter = diamond_counter + 1
        diamontNumber.innerHTML = diamond_counter
    }
})

sellCopperBtn.addEventListener("click", event => {
    if (copper_counter > 0) {
        copper_counter = copper_counter - 1
        copperNumber.innerHTML = copper_counter
        counter = counter + 500
        number.innerHTML = counter
        xp_counter = xp_counter + 500
        xpNumber.innerHTML = xp_counter
    }
    if (copper_counter == 0) {
        alert("You don't have enough copper")
    }
    levelTwoIncrease()
})

sellIronBtn.addEventListener("click", event => {
    if (iron_counter > 0) {
        iron_counter = iron_counter - 1
        ironNumber.innerHTML = iron_counter
        counter = counter + 750
        number.innerHTML = counter
        xp_counter = xp_counter + 500
        xpNumber.innerHTML = xp_counter
    }
    if (iron_counter == 0) {
        alert("You don't have enough iron")
    }
    levelTwoIncrease()
})

sellGoldBtn.addEventListener("click", event => {
    if (gold_counter > 0) {
        gold_counter = gold_counter - 1
        goldNumber.innerHTML = gold_counter
        counter = counter + 7500
        number.innerHTML = counter
        xp_counter = xp_counter + 500
        xpNumber.innerHTML = xp_counter
    }
    if (gold_counter == 0) {
        alert("You don't have enough gold")
    }
    levelTwoIncrease()
})

sellDiamondBtn.addEventListener("click", event => {
    if (diamond_counter > 0) {
        diamond_counter = diamond_counter - 1
        diamondNumber.innerHTML = diamond_counter
        counter = counter + 10000
        number.innerHTML = counter
        xp_counter = xp_counter + 500
        xpNumber.innerHTML = xp_counter
    }
    if (diamond_counter == 0) {
        alert("You don't have enough diamond")
    }
    levelTwoIncrease()
})