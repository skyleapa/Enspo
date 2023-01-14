// import data from '../../data/clothes.json' assert {type: "json"}

// const myObj = JSON.parse(data);
// x = myObj.coats;
// console.log(x[0]);
const sort = require('./Sort.js');

const fs = require('fs')
fs.readFile('../../data/clothes.json', 'utf8', (err, jsonString) => {
    if (err) {
        return;
    }
    try {
        const clothes = JSON.parse(jsonString);
        // for (let m in clothes.coats) {
        //     console.log(m);
        //     console.log(clothes.coats.m.tags); 
        // }

        tagged = clothes.coats.d.tags;
        console.log(tagged);
        console.log(sort.respond("winter", tagged));
} catch(err) {
        console.log('Error parsing JSON string:', err);
    }
})
