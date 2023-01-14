import data from '../../data/clothes.json' assert {type: "json"}

const myObj = JSON.parse(data);
x = myObj.coats;
console.log(x[0]);
