const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const symbols = "!@#$%^&*:;><.,/?-_+";

const passLength = document.getElementById("length");
const selectLower = document.getElementById("lowercase");
const selectUpper = document.getElementById("uppercase");
const selectNumbers = document.getElementById("numbers");
const selectSymbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const passwordOutput = document.getElementById("password");

generateBtn.addEventListener("click", generateOTP)

function generateOTP() {

    const length = parseInt(passLength.value);
    let characters = ""; //Generates possible string based on the input
    let password = ""; //Filters out the final result

    // console.log("length:", length)

    if (selectLower.checked) {
        characters += lowerLetters;
    }

    if (selectUpper.checked) {
        characters += upperLetters;

    }

    if (selectNumbers.checked) {
        characters += numbers;
    }

    if (selectSymbols.checked) {
        characters += symbols;
    }

    for (let i = 0; i < length; i++) {

        password += characters.charAt(Math.floor(Math.random() * characters.length));

    }

    passwordOutput.value = password;
    // console.log("pass:", password)
}