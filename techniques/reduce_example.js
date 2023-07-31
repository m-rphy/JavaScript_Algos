// ADD CODE HERE
 const schoolSupplies2 = (items, quantity) => items.reduce((accumulator, element,index) => {
   return {...accumulator, [element]: quantity[index]};
 },{})
 

// UNCOMMENT THESE TO TEST YOUR WORK!
const items2 = ['pencils', 'pens', 'crayons', 'erasers'];
const quantities2 = [20, 12, 36, 6];
const supplyList = schoolSupplies2(items2, quantities2);
console.log(supplyList.crayons); // should log 36
  