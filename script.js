let num = 5
let num2 = 2.1

let name = "Ava"

console.log(num)

let student = {
    name: "Ava",
    major: "Graphic Design",
    age: 21
}

console.log(student)

//booleans

let isDataLoaded = false
console.log(isDataLoaded)
isDataLoaded = !isDataLoaded
console.log(isDataLoaded)

//arrays
let nums = [1, 2, 3, 4, 5]
console.log(nums[3])
//this will display 4

let students = [
    {name: "Ava", major: "Graphic Design", age: 21},
    {name: "John", major: "Computer Science", age: 22},
    {name: "Jane", major: "Mathematics", age: 20}
]
console.log(students[1].name)

//constant variable stays the same
const pi = 3.14

//functions
function addThreeToNum(num) {
    return num + 3      
}

addThreeToNum(5)
console.log(addThreeToNum(5))

function greet() {
    console.log("hello")
}

greet()

function greetPerson(name) {
    console.log("Hello " + name)
}

greetPerson("Ava")

//loops
for (let i = 0; i < 5; i++) {
    console.log(i)
}

let courses = ["Graphic Design", "Computer Science", "Mathematics"]

for (let i = 0; i < 3; i++) {
    console.log(courses[i])
}

//my thing
let friends = ["Britt", "Luke", "Candler", "Audrey", "Meghan", "Ethan", "Anu", "Cece"]

for (let i = 0; i < friends.length; i++) {
    console.log(friends[i])
}

//conditionals
let score = 35

if (score >= 90) {
    console.log("A")
} else if (score <= 90) {
    console.log("B")
}

//javascript is linked in the body of html right before the closing tag
//like this <script src="script.js"></script>

document.getElementById("para").style.color = "blue"
document.getElementById("para").style.fontSize = "30px"


//let starts a variable
// create a function that takes two parameters and turn any box into a assigned color

function updateColor(id, bg) {
  document.getElementById(id).style.background = bg
}

updateColor("box3", "red")
updateColor("box5", "pink")

//original function
function updateStyles(id, colorValue, borderRadius, scale, rotation) {
  document.getElementById(id).style.background = colorValue
  document.getElementById(id).style.borderRadius = borderRadius + "px"
  document.getElementById(id).style.transform = `scale(${scale}) rotate(${rotation}deg)`
}

updateStyles("box4", "blue", 50, 1.5)
updateStyles("box1", "black", 30, 0.5, 45)

//optimizing
let box1 = document.getElementById("box1")
let box2 = document.getElementById("box2")

function updateBox(el, colorValue, borderRadius, scale, rotation) {
   el.style.background = colorValue
   el.style.borderRadius = borderRadius + "px"
   el.style.transform = `scale(${scale}) rotate(${rotation}deg)`
 }

 updateBox(box1, "black", 30, 0.5, 45)

