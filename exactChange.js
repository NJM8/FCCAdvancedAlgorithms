// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// Return the string "Insufficient Funds" if cash-in-drawer is less than the changeNeeded due. Return the string "Closed" if cash-in-drawer is equal to the changeNeeded due.

// Otherwise, return changeNeeded in coin and bills, sorted in highest to lowest order.

const steps = {
  'PENNY': 1,
  'NICKEL': 5,
  'DIME': 10,
  'QUARTER': 25,
  'ONE': 100,
  'FIVE': 500,
  'TEN': 1000,
  'TWENTY': 2000,
  'ONE HUNDRED': 10000
}

function removeDecimal(num){
  return Math.round(num * 100);
}

function addDecimal(num){
  return Number((num / 100).toFixed(2));
}

function checkCashRegister(price, cash, cid) {
  let fixedPrice = removeDecimal(price);
  let fixedCash = removeDecimal(cash);
  let fixedCid = cid.map(denom => [denom[0], removeDecimal(denom[1])]);
  let changeNeeded = fixedCash - fixedPrice;
  let totalInDrawer = fixedCid.reduce((result, coins) => {
    result += coins[1];
    return result;
  }, 0);

  if (totalInDrawer === changeNeeded) {
    return 'Closed';
  }

  if (totalInDrawer < changeNeeded) {
    return 'Insufficient Funds';
  }

  let result = [];

  for (let i = fixedCid.length - 1; i >= 0; i--) {
    let thisStep = steps[fixedCid[i][0]];
    if (thisStep > changeNeeded || fixedCid[i][1] === 0) {
      continue;
    } else {
      let thisChange = 0;
      let changeAvailable = fixedCid[i][1];
      while (thisStep <= changeNeeded && changeAvailable > 0) {
        thisChange += thisStep;
        changeNeeded -= thisStep;
        changeAvailable -= thisStep;
        if (changeAvailable === 0.00 && fixedCid[i][0] === 'PENNY') {
          return 'Insufficient Funds';
        }
      }
      result.push([fixedCid[i][0], thisChange]);
    }
  }
  result = result.map(res => [res[0], addDecimal(res[1])]);
  return result;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));

console.log([["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]]);
