/*
    CIT 281 Project 2
    Name: Benjamin Wright
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";

for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += alphabet[getRandomInteger(1,alphabet.length-1)];
}

; 
//generates a random letter by finding a random integer that ties to the const alphabet list. 
//then return random letter through console.log                                                                      
let randLetter = ""
function getRandomLetter() {
randLetter = randLetter + alphabet[getRandomInteger(1, alphabet.length-1)]
}

//generates a random string by calling a for loop of randomInteger length to call getRandomLetter to create a string.
let randString = ""
function getRandomString(minLength, maxLength) {
    for (let i = 0; i < getRandomInteger(minLength, maxLength); i++) {
        randString += getRandomLetter()
        randString = randLetter
    }

}
getRandomString(10, 20)
console.log(randString)
let sortedString =""
//takes the randString generated earlier, seperates then sorts and then removes the seperation back into a sorted string
function getSortedString() {sortedString = randString.split("").sort().join(""); console.log(sortedString)}
