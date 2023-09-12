const miles = process.argv[2];

const kilometers = miles * 1.60934;

console.log(`${miles} miles is equal to ${kilometers.toFixed(2)} kilometers`);
