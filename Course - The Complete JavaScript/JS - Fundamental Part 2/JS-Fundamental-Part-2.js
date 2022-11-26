// 'use strict';
///////////////////////////////////////////// Coding Challange #1 🎯 /////////////////////////////////////////////

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const calcAverageDolphins = calcAverage(44,23,71);
// const calcAverageKoalas = calcAverage(65,54,49);

// const checkWinner = function(avgDolphins, avgKoalas) {
//   if(avgDolphins >= 2 * avgKoalas) {
//     return console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     return console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     return  console.log(`No teams win`);
//   }
// }

// checkWinner(calcAverageDolphins,calcAverageKoalas);

///////////////////////////////////////////// Coding Challange #2 🎯 /////////////////////////////////////////////

// const calcTip = (bill) => bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]];

// console.log(bills, tips, totals);

///////////////////////////////////////////// Coding Challange #3 🎯 /////////////////////////////////////////////

// const mark = {
//   fullName: 'Mark Miller',
//   mass: 75,
//   height: 1.69,
//   calcBMI: function() {
//     return this.mass / (this.height * this.height)
//   }
// }
// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function() {
//     return this.mass / (this.height * this.height)
//   }
// }

// const higherBMI = mark.calcBMI() > john.calcBMI() ?
// console.log(`Mark's BMI (${mark.calcBMI()}) is higher than John's BMI (${john.calcBMI()})`)
// : console.log(`John's BMI (${john.calcBMI()}) is higher than Mark's BMI (${mark.calcBMI()})`);

///////////////////////////////////////////// Coding Challange #4 🎯 /////////////////////////////////////////////

// const bills = [22,295,176,440,37,105,10,1100,86,52];
// const tips = [];
// const totals = [];
// const calcTip = (bill) => bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;

// for(let bill = 0; bill < bills.length; bill++) {
//   const tip = calcTip(bills[bill]);
//   tips.push(tip);
//   totals.push(bills[bill] + tip);
// }

// console.log(tips, totals);

// const calcAverage = function(arr) {
//   let sum = 0;
//   for(let item = 0; item < arr.length; item++) {
//     sum += arr[item];
//   }
//   const avg = sum / arr.length;
//   return sum, avg;
// }

// console.log(calcAverage(bills));
