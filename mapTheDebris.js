// Return a new array that transforms the element's average altitude into their orbital periods.

// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// You can read about orbital periods on wikipedia.

// The values should be rounded to the nearest whole number. The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

// T = 2(pi)(sqrt(alt^3/gm))

// ALT = cubed_root((GM * T^2)/4(pie)^2)

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  return arr.reduce((result, body) => {
    body.orbitalPeriod = Math.round((2*(Math.PI))*(Math.sqrt(Math.pow(body.avgAlt + earthRadius, 3) / GM)));
    delete body.avgAlt;
    result.push(body);
    return result;
  }, []);
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
console.log('Expected: [{name: "sputnik", orbitalPeriod: 86400}]');
