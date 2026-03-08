
const form = document.getElementById("form")

const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")
const submitBtn = document.getElementById("submitBtn")

const nameError = document.getElementById("nameError")
const emailError = document.getElementById("emailError")
const passwordError = document.getElementById("passwordError")

function validateForm(){

let valid = true

// Name validation
if(nameInput.value.trim() === ""){
nameError.textContent = "Name cannot be empty"
valid = false
}else{
nameError.textContent = ""
}

// Email validation
let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

if(!emailPattern.test(emailInput.value)){
emailError.textContent = "Enter a valid email"
valid = false
}else{
emailError.textContent = ""
}

// Password validation
if(passwordInput.value.length < 6){
passwordError.textContent = "Password must be at least 6 characters"
valid = false
}else{
passwordError.textContent = ""
}

submitBtn.disabled = !valid

}

nameInput.addEventListener("input",validateForm)
emailInput.addEventListener("input",validateForm)
passwordInput.addEventListener("input",validateForm)


// Popup message on submit
form.addEventListener("submit",function(event){

event.preventDefault()

let name = nameInput.value

alert(name + " successfully registered!")

form.reset()
submitBtn.disabled = true

})
