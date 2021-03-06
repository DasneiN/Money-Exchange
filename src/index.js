// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    if (currency <= 0) return {};
    if (currency > 10000) return { error: "You are rich, my friend! We don't have so much coins for exchange" };

    let result = {},
        designations = new Map([
      ['H',50],
      ['Q',25],
      ['D',10],
      ['N',5],
      ['P',1]
    ]);

    designations.forEach( (value, key, map) => {
      
      let n = (currency - currency % value) / value;      
      if (n > 0) {
        result[key] = n;
        currency = currency - n * value;
      }
      
    } );

    return result;
}
