// Reverse a String
function stringReverse(string) {
   let splitString = string.split('');
   splitString.reverse();
   let finalString = splitString.join('');
   return finalString;
}

console.assert(stringReverse('dogo') === 'ogod');
console.assert(stringReverse('katas') === 'satak');

//Reverse a sentence
function reverseSentence(sentence) {
   let splitSentence = sentence.split(' ');
   splitSentence.reverse();
   let finalSent = splitSentence.join(' ');
   return finalSent;
}

console.assert(reverseSentence('the cat and the dog') === 'dog the and cat the');
console.assert(reverseSentence("There's a shark out there!") === "there! out shark a There's");

// Find the minimum value in an array
function minValue(list) {
   let minimal = list[0];
   for (let i = 0; i < list.length; i++) {
      if (list[i] < minimal) {
         minimal = list[i];
      }
   }
   return minimal;
}

console.assert(minValue([4,5,6,2,5]) === 2);
console.assert(minValue([5,100,23,3242,-4,-50,.5]) === -50);

// Find the max value in an array
function maxValue(list) {
   let max = list[0];
   for (let i = 0; i < list.length; i++) {
      if (list[i] > max) {
         max = list[i];
      }
   }
   return max;
}

console.assert(maxValue([4,5,6,2,5]) === 6);
console.assert(maxValue([5,100,23,3242,-4,-50,.5]) === 3242);

// Calculate the remainder
function remainder(num, den) {
   let remaining = num%den;
   return remaining;
}

console.assert(remainder(10,9) === 1);
console.assert(remainder(100.5,9) === 1.5);

// Return distinct values from duplicates
function distinct(list) {
   let distinctList = [];
   for (let i = 0; i < list.length; i++) {
      if (distinctList.includes(list[i])) {
         continue;
      } else {
         distinctList.push(list[i]);
      }
   };
   return distinctList;
}

let result = distinct(['1','3','3','7','3','1','1','5'])
console.assert( result === ['1','3','7','5'], {
   "function": "distinct(['1','3','3','7','3','1','1','5'])",
   "expected": ['1','3','7','5'],
   "result": result
  });

let result2 = distinct(['dog','3','3','7', '1','1','cat'])
console.assert( result2 === ['dog','3','7','1','cat'], {
  "function": "distinct(['dog','3','3','7', '1','1','cat'])",
  "expected": ['dog','3','7','1','cat'],
  "result": result2
 });


// Return distinct values and their counts
function distinctCounts(list) {
   let duplicateObj = {};
   let finalString = '';
   const splitList = list.split(' ');

   for (let i = 0; i < splitList.length; i++) {
      if (duplicateObj.hasOwnProperty(splitList[i])) {
         duplicateObj[splitList[i]] += 1;
      } else {
         duplicateObj[splitList[i]] = 1;
      }
   }

   for (let property in duplicateObj) {

      finalString += (property + '(' + String(duplicateObj[property]) + ') ')
   }
   finalString = finalString.trim(' ')
   return finalString;
}

let result3 = distinctCounts('1 3 5 3 7 3 1 1 5');
console.assert( result3 === '1(3) 3(3) 5(2) 7(1)');

let result4 = distinctCounts('1 3 13 3 7 3 13 1 5');
console.assert( result4 === '1(2) 3(3) 5(1) 7(1) 13(2)', {
   "function": "distinctCounts('1 3 13 3 7 3 13 1 5')",
   "expected": '1(2) 3(3) 5(1) 7(1) 13(2)',
   "result": result4
});

// 8

function evaluateExpressions(expString, objPairs) {
   let expressions = expString.split(' ');
   let total = 0;

   for (let item in expressions) {
      let expItem = expressions[item];

      if (['+', '-'].includes(expItem)) {
         continue;
      } else {
         let numToEval = Number(objPairs[expItem]);
         let actToDo = expressions[item-1];
         let signMultiplier = +1;

         if (actToDo === '-') signMultiplier = -1;

         total = total + numToEval * signMultiplier;
      }
   }
   return total;
}

console.assert(evaluateExpressions("a + b + c - d", {a: 1, b: 7, c: 3, d: 14}) === -3);
console.assert(evaluateExpressions("b - b + c - d + a", {a: 1, b: 7, c: 3, d: 14}) === -10);
