var maximumWealth = function (accounts) {
   let resArr = accounts.map(el => el.reduce((sum, current) => sum + current));
   return (Math.max.apply(null, resArr));
};