"use strict";
function handle1Click(array, maxIndexForSum) {
  let sum = 0;
  for (let i = 0; i < maxIndexForSum; i++) {
    sum = +array[i];
  }
  console.log("ex1", " sum: ", sum);
  return sum;
}

function handle2Click(array) {
  let positiveCount = 0;
  let isPositeve = false;
  array.forEach((element) => {
    isPositeve = element >= 0;
    positiveCount += isPositeve;
  });
  let negativeCount = array.length - positiveCount;
  console.log(
    "ex2",
    "positiveCount : ",
    positiveCount,
    "negativeCount :",
    negativeCount
  );
  // return { positiveCount: amountOfPositeveNum, negativeCount: array.length - amountOfPositeveNum }
}

function handle3Click(stringArray, textToAdd) {
  stringArray.forEach((element) => {
    console.log(element + textToAdd);
  });
}

function handle4Click(number) {
  for (
    let potentilyPrimeNum = 2;
    potentilyPrimeNum < number;
    potentilyPrimeNum++
  ) {
    if (isPrime(potentilyPrimeNum)) {
      console.log(potentilyPrimeNum + " is prime ");
    }
  }
}

function isPrime(potentilyPrimeNum) {
  let reminder = 0;
  for (
    let devideNum = 2;
    devideNum < Math.sqrt(potentilyPrimeNum);
    devideNum++
  ) {
    reminder = potentilyPrimeNum % devideNum;
    if (reminder == 0) {
      return false;
    }
  }
  return true;
}

function handle5Click(n) {
  let currLine;
  for (let indexOfCurrLine = 1; indexOfCurrLine < n; indexOfCurrLine++) {
    currLine = makeLine(indexOfCurrLine, n * 2 + 1);
    console.log(currLine);
  }
  for (let index = n; index > 0; index--) {
    currLine = makeLine(index, n * 2 + 1);
    console.log(currLine);
  }
}

function makeLine(biggestNumInCurrLine, MaxLineLincght) {
  let line = biggestNumInCurrLine + "";
  let amountOfSpaceToAddInLine = 0;
  biggestNumInCurrLine -= 1;
  for (let currNum = biggestNumInCurrLine; currNum > 0; currNum--) {
    line = currNum + line + currNum;
  }
  line = "*" + line + "*";
  let sizeOfline = line.length;
  amountOfSpaceTo;
  AddInLine = (MaxLineLincght - sizeOfline) / 2;
  return " ".repeat(amountOfSpaceToAddInLine) + line;
}

function handle6Click() {
  const EXIT = -999;
  let input = prompt("please enter your number");
  while (input != EXIT) {
    let decodedMsg = codedMsgToTxt(input);
    console.log(decodedMsg);
    input = prompt("please enter your number");
  }
}

function codedMsgToTxt(numMsg) {
  let secoundDigit = secodDigitValue(numMsg);
  let decodedMsgInNum = decodeMsgToNum(numMsg, secoundDigit);
  return decodeMsgToText(decodedMsgInNum);
}

function decodeMsgToNum(num, secendDigit) {
  let decodedMsgInNum = 0;
  switch (secendDigit) {
    case 2:
      decodedMsgInNum = moveNumLeft(moveNumLeft(num));
      break;
    case 5:
      decodedMsgInNum = revercNum(num);
      break;
    case 8:
      let RemainderAmount = num / 8;
      decodedMsgInNum = RemainderAmount * num;
      break;
    default:
      // if you move a four digit number three time to the right it's the same as moving to the left
      decodedMsgInNum = moveFourDigitNumRight(num);
  }
  return decodedMsgInNum;
}

function decodeMsgToText(textNumberDecoded) {
  if ((textNumberDecoded > 5001) & (textNumberDecoded < 10000)) {
    return "What's up";
  }
  if ((textNumberDecoded > 1000) & (textNumberDecoded < 5000)) {
    return "cool";
  } else {
    return "Somthing is not OK";
  }
}

function secodDigitValue(num) {
  let numInString = "" + num;
  let secoundDigit = numInString.charAt(1);
  return parseInt(secoundDigit);
}

function moveNumLeft(number) {
  let rightMostDigit = number % 10;
  let numberWitoutRightMostDigit = "" + (number - rightMostDigit) / 10;
  let answer = rightMostDigit + numberWitoutRightMostDigit;
  return answer;
}

function moveFourDigitNumRight(number) {
  return moveNumLeft(moveNumLeft(moveNumLeft(number)));
}

function revercNum(num) {
  let numInStr = "" + num;
  let arrayStrNum = Array.from(numInStr);
  let reverceNum = "";
  arrayStrNum.forEach((element) => {
    reverceNum = element + reverceNum;
  });
  return reverceNum;
}

function handle7Click() {
  const damgeTankDealsToSnake = 20;
  const damagePerRound = 10;
  const damagePerGranad = 30;
  let amountOfDamegeDeltToTank = 0;
  let amountOfDamegeDeltToSnake = 0;
  let snakeHP = helthInput();
  let snakeRounds = roundsInput();
  let snakeGranads = granadInput();
  let isMatchGoing = true;
  while (isMatchGoing) {
    let userAction = userActionInput();
    switch (userAction) {
      case 1:
        let amountToShot = roundsToShoot();
        amountOfDamegeDeltToTank += damagePerRound * amountToShot;
        amountOfDamegeDeltToSnake += 20;
        snakeRounds -= amountToShot;
        break;
      case 2:
        if (snakeGranads > 0) {
          amountOfDamegeDeltToTank += 30;
          snakeGranads--;
        }
        amountOfDamegeDeltToSnake += 20;
        break;
      case 3:
      case 4:
      default:
        break;
    }
  }
}

function helthInput() {
  let commentValid = false;
  while (!commentValid) {
    let input = prompt("please enter the amount of helth");
    if (input > 100 || input < 0) {
      alert(
        "invalid helth inputeed , helth must be between 100 and 0 \n please input again"
      );
    }
  }
  return input;
}
function roundsInput() {
  return prompt("please enter the amount of rounds");
}

function granadInput() {
  return prompt("please enter the amount of rounds");
}

function userActionInput() {
  return prompt("please enter the action of the user");
}

function roundsToShoot(amountInStock) {
  let input = prompt("please enter the amount of rounds to shot");
  if (input > amountInStock) {
    return 0;
  }
  return input;
}

let changeFirstLetterToUpperCase = (word) =>
  word[0].toUpperCase() + word.slice(0, 1);

// let ToAddPinky = (moneyAmount) => {if(moneyAmount > 1e6){ return '(Pinky)'} return ''};
// let DrEvil = (moneyAmount) => `${moneyAmount} dollars ${ToAddPinky(moneyAmount)}`;

// function MixUp(firstWord , SecoundWord) {
//   let mixedWord = firstWord.slice(0,2);
//   mixedWord += SecoundWord.slice(2) + ' ';
//   mixedWord += SecoundWord.slice(0,2);
//   mixedWord += firstWord.slice(2);
//   return mixedWord;
// }

// function fixStart(str) {
//   let strArr = str.split('');
//   Answer = strArr.reduce((acc , letter) => {
//     if (letter === strArr[0]){
//       return acc + '*';
//     }
//     return acc + letter;
//   },'')
// }
// function notBad(str) {
//   let notPostion = str.search(not);
//   let badPostion = str.search(bad);
//   if( notPostion > badPostion ){
//     return str;
//   }
//   return str.slice(0,notPostion) + ' good ' +str.slice(badPostion);
// }

function revercseString(str) {
  let strInArr = str.split("");
  return strInArr.reduce((reverStr, char) => char + reverStr, "");
}

const object = {
  a: [{ x: 2 }, { y: 4 }],
  b: 1,
};

const other = {
  a: { z: 3 },
  b: [2, 3],
  c: "foo",
};

const newOb = {
  ...object,
  ...other,
};
function handle8Click() {
  console.log(newOb);
}

const number = {
  a: 1,
  b: 2,
  c: 3,
  d: "4",
  e: 5,
};

 for (const key in object) {
  if(!condition(object[key])){
    resolts[key] = object[key];
  }
 }
 function omitBy(object ,condition) {
  let resolts = {};
  for (const key in object) {
    if(!condition(object[key])){
      resolts[key] = object[key];
    }
  }
  return resolts;
}
function answerFor4(arr,max) {
    if(arr.length < max){
      return arr.sort((n1 ,n2 ) => n1 -n2);
    }
    let answer =  arr.sort((n1 ,n2 ) => n1 -n2)
    return answer[0..max];
}
let arr = [2,3,12,1,2];
 console.log(answerFor4(arr, 2))

let test = [1,3,2];
let test2 = [10, 30, 20]

console.log(reduce_Whith(test2 , (a,b) => b-a ))

function reduce_Whith(object ,fucntion = (a,b ) => a-b) {
  return object.sort(fucntion)[0];
}

function all(arr, condition = (x) =>(x>1)) {
  let answer = arr.reduce((acc, val) =>{
    return acc = acc && condition(val);
},true);
return answer;
}

function all(arr, condition = x =>true){
  return arr.every(condition)}
function filter_Non_UniqueBy(items, isNonUnique) {
  return items.filter((a, indexA) => {
    return !items.some((b, indexB) => indexA !== indexB && isNonUnique(a, b));
  });
}

// a,b = > x == 2 ;
console.log(
  filter_Non_UniqueBy(
    [
      { id: 0, value: "a" },
      { id: 1, value: "b" },
      { id: 2, value: "c" },
      { id: 1, value: "d" },
      { id: 0, value: "e" },
    ],
    (a, b) => a.id == b.id
  )
);
