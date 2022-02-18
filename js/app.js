// 1 // Napisati JavaScript funkciju koja će vratiti kontent trenutno otvorenog prozora:
function printWindowOnClick() {
    window.print(document);
}

// 2 // Napisati JavaScript funkciju koja vraća trenutni dan i vrijeme
function getMeTheTime() {

    let vrijeme = new Date();
    timeInHoursPmAm = vrijeme.toLocaleString('en-US', { hour: 'numeric', hour12: true }) /// ako se stavi srpski jezik umjesto en-US prikazuje se po podne ili prijepodne ..
    let mm = vrijeme.getMinutes();
    let ss = vrijeme.getSeconds();
    vrijeme = mm + ' : ' + ss;
    return timeInHoursPmAm + ' ' + ': ' + vrijeme;
}

let trenutnoVrijeme = document.querySelector('.trenutno-vrijeme');
trenutnoVrijeme.textContent = getMeTheTime();

///////////////////////////////funkcija koja vraca dan u sedmici + DOM selektor ///////////////
function getWeekDay () {
    const daniUsedmici = new Date();
    let options = {              /// opcije za internacionalni format vremena * vise na linku
    weekday: 'long'              /// mora se definisati prije intl.datetimeformat ...
    }
    let sedmica = new Intl.DateTimeFormat('sr-Latn-BA', options).format(daniUsedmici);
    return sedmica
}
let trenutnoJeDanUsedmici = document.querySelector('.dan-sedmice');
trenutnoJeDanUsedmici.textContent = getWeekDay ()

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat     //////////////////////////////////

// 3 // - Napisati JavaScript funkciju koja vraća obrnut broj: Primjer x = 32243 Očekivani ////// output: 34223
function getReversedNumber() {
    let x = prompt('Unesi sekvencu brojeva', '');  
    result = x.split('').reverse().join('');       // 3 metoda; split uneseni broj, reverse i join
    return alert(Number(result));          // rezultat se prikazuje u alert prozoru, number constructor prevodi string u broj. Broj je string zato sto prompt prihvata string a ne broj
}

// 4 // Napisati JavaScript funkciju koja vraća proslijeđeni string sa slovim poredanim
//po alfabetu:

function sortByAlphabet() {
    let x = prompt('Unesi sekvencu rijeci ili slova', '');  
    result = x.split('').sort().join('');   
    return alert(result);       
}

// 5 // Napisati JavaScript funkciju koja prihvata string kao parametar i pronalazi najdužu riječ:

function getLongestWord(prompt) {
  let array1 = prompt.match(/\w[a-z]{0,}/gi);  // ovo je regular expression iliti sablon za pretragu
  let result = array1[0];

  for(let x = 1 ; x < array1.length ; x++) {
    if(result.length < array1[x].length) {
    result = array1[x];
    } 
  }
  return result;
}

function alertOnClick() {         // funkcija koja dodaje alert window na button click za task 5, onclick u html ne dopusta da se doda parametar u funkciju
    alert(getLongestWord(prompt('Napiši nekoliko rečenica', ''))); 
}

// 6 // - Napisati JavaScript funkciju koristeći LOOP da ispišete sve brojeve u rangu od 0 do 20 koji su podjeljeni sa 3


function getNumbersDividedByThree() {
    let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

    for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 3 === 0){
       console.log(numbers[i]);
        }
    }
}
function alertOnClick1() {
    getNumbersDividedByThree();
}

// 7 // - Napisati JavaScript funkciju koristeći LOOP da ispišete sve brojeve u rangu od 9 do 0 opadajućim redosljedom
function getNumbersFromArrayReversed() {
    let arrayOfNum = [0,1,2,3,4,5,6,7,8,9];
    for (let i = 9; i >= 0; i--) {  // ili let i = arrayOfNum.length - 1
    console.log(arrayOfNum[i]);
    }
}
function promptOnClick1() {
    getNumbersFromArrayReversed();
}

//8// Napisati JavaScript funkciju koja koristi prompt da pita korisnika za unos broja između 0 i 100. Ako broj nije u tom rangu, prikazati error poruku i pitati ga ponovo dok ne unese validan broj (koristite promp i while)

function numberBetween() {
    let ans = parseInt(prompt('Unesi broj između 0 i 100', ''));
    while (ans > 100 || ans < 0) {
        ans = parseInt(prompt('Greška. Unesi broj između 0 i 100', ''));
    }
    if (ans <= 100 && ans >= 0 ) {
        alert('Uneseni broj je tačan')
    }
}
function promptOnClick2() {
    numberBetween();
}

// 9 // Napisati JavaScript funkciju koja pita korisnika da unese dva broja, jedan za drugim, zatim ispišite u alertu veći broj

function getHigherNumber() {
    let inputNum1 = parseInt(prompt('Unesi prvi broj', ''));
    let inputNum2 = parseInt(prompt('Unesi drugi broj', ''));
    if (inputNum2 > inputNum1) {
        alert('Veći broj je ' + inputNum2);
    } else if (inputNum2 === inputNum1) {
        alert('brojevi su jednaki');
    } else {
        alert('Veći broj je ' + inputNum1);
    }
}
function promptOnClick3() {
    getHigherNumber();
}

// 10 // Napisati JavaScript funkciju koristeći LOOP da ispišete sve brojeve u rangu od 0 do 5, svaki zasebno u alert prozoru
function listNumbersInAlert() {
    for (i=0; i < 6; i++) {
        alert(i)
    }
}

function promptOnClick4() {
    listNumbersInAlert();
}

// 11 // Napisati JavaScript funkciju koja proslijeđuje “JavaScript funkciju” kao parametar i u konzoli ispitati da li je sve kako treba, da li vraća ono što projeslijeđena funkcija sadrži. (funkcija koju proslijeđujete treba da ima unutar sebe samo konzol log)


function passFuncAsParameter(functionAsPara) {     // "parent" funkcija koja proslijeđuje
    functionAsPara();
}
function passThisFunction() {               // funkcija koja se proslijeđuje a sadrži console.log
    alert('It works! Check the console.log');  // ovaj dio je višak ali sam ipak dodao
    console.log('I got here through another function!');
}

function promptOnClick5() {  // aktivira na klik i proslijeđuje matičnu funkciju sa parametrom koji je funkcija
    passFuncAsParameter(passThisFunction);
}

// 12 // Napisati JavaScript funkciju koja provjerava da li je vrijednost neke riječi string ili ne Primjer: ‘’ime1prezime’’ - vraća true [1,2,3,4] - vraća false

function isStringOrNot(input) {
    if(typeof input === 'string') {
        return true
    } else {
        return false
    }
}

function promptOnClick6() { 
    const inputForTruthyFalsyCheck = 'somerandomstring';
    const inputForTruthyFalsyCheckTwo = [123456];

    alert(inputForTruthyFalsyCheck + ' is ' + isStringOrNot('stringasada') + ' and ' + inputForTruthyFalsyCheckTwo + ' is ' + isStringOrNot(inputForTruthyFalsyCheckTwo));
    console.log(inputForTruthyFalsyCheck + ' is ' + isStringOrNot('stringasada') + ' and ' + inputForTruthyFalsyCheckTwo + ' is ' + isStringOrNot(inputForTruthyFalsyCheckTwo));
}



// 13 // - Napisati JavaScript funkciju koja provjerava da li je string prazan ili ne Primjer: ‘’’’ - vraća true‘’ime1prezime’’ - vraća false

function isStringEmpty(input) {
    if(input === '') {
        return true
    } else {
        return false
    }
}

function promptOnClick7() { 
    const inputCheck = prompt('Unesi string za provjeru. Ako je prazan vraca true, ako nije vraca false.', '');
    alert(isStringEmpty(inputCheck));
}

// 14 // - Napisati JavaScript funkciju koja će odraditi split stringa i konvertovaće ga u niz riječi // Primjer stringa: “Robin Hood”. Nakon funkcije: [“Robin”, ”Hood”]

function splitWordsToArray(input) {
    let arrayOfStrings = input.split(' ');
    return arrayOfStrings;
}
function promptOnClick8() { 
    let input = prompt('Unesi sekvencu rijeci i vraticu ti polje stringova', '');
    alert(splitWordsToArray(input));
    console.log(splitWordsToArray(input));
}

// 15 // 
// - Napisati JavaScript funkciju koji kao parametar prima string i mjenja prvo slovo svake riječi u uppercase.
// Primjer: “ovo je kurs frontenda”
// Rezultat: “Ovo Je Kurs Frontenda”

// Koristiti: 
// 	charAt() - moteda koja se koristi za dobijanje specifičnog karaktera iz stringa
// 	toUpperCase() - metoda koja se koristi da konvertuje vrijednost stringa u          uppercase
// 	slice() - metoda koja vraća kopiju dijela niza u novi niz
// 	push() - metoda koja dodaje jedan ili više elemenata na kraj jednog niza i vraća novu dužinu niza
// 	join() - metoda pridružuje sve elemente jednog niza u string

function capitalizeWords(input) {
    let arrayOfStrings = input.split(' '); // splituje stringove u niz-array stringova, razdvajajuci u substringove "rijec" + "rijec" itd.
    let newArray = [];  // prazan,novi array u koji ce se smjestiti rezultat

    for (let i = 0; i < arrayOfStrings.length; i++) {
        newArray.push(arrayOfStrings[i].charAt(0).toUpperCase() + arrayOfStrings[i].slice(1));
    }
    return newArray.join(' ');
}

function promptOnClick9() { 
    let input = prompt('Unesi sekvencu rijeci i vraticu ti rijeci sa velikim pocetnim slovom', '');
    alert(capitalizeWords(input));
}