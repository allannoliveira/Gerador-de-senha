// Declarando botoes e checkbox.
const lenInput = document.querySelector("#inputLengthId");
const infoLength = document.querySelector('label[for="labelLengthId"]');
const btnGerar = document.querySelector("#btnGerar");

const chkLower = document.querySelector("#chkLowerId");
const chkUpper = document.querySelector("#chkUpperId");
const chkNumber = document.querySelector("#chkNumberId");
const chkSymbols = document.querySelector("#chkSymbolsId");

// Declarando variaveis para a criação da senha.
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["!", "@", "#", "$", "%"];

const caracters = Array.from(Array(26)).map((_, i) => i + 97);
const LowercaseCaracters = caracters.map((item) => String.fromCharCode(item));
const UppercaseCaracters = LowercaseCaracters.map((item) => item.toUpperCase());

infoLength.innerHTML = lenInput.value;
lenInput.addEventListener("change", () => {
    infoLength.innerHTML = lenInput.value;
});

btnGerar.addEventListener("click", () => {
  generatePassword(
    chkNumber.checked,
    chkSymbols.checked,
    chkLower.checked,
    chkUpper.checked,
    lenInput.value
    );
  });

  let generatePassword = (
    hasNumbers,
    hasSymbols,
    hasLowercase,
    hasUppercase,
    lenght
  ) => {
    let newArray = [
      ...(hasNumbers ? numbers : []),
      ...(hasSymbols ? symbols : []),
      ...(hasLowercase ? LowercaseCaracters : []),
      ...(hasUppercase ? UppercaseCaracters : []),
    ];

    if (newArray.length === 0) return;

    let password = "";

    for (let i = 0; i < lenght; i++){
        const randomIndex = Math.floor(Math.random() * newArray.length);
        password += newArray[randomIndex];
      
    }

    document.getElementById('inputPasswordId').value = password;

};
