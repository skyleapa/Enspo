const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "test",
});
const openai = new OpenAIApi(configuration);

function stringer(arr) {
  theString = ""
  for (element in array) {
    theString += array;
  }

  return theString

  amounts.forEach(item => {
    doubledAmounts.push(item * 2);
  })
}

console.log(stringer(["sport", "book", "apple"]));


// // keyword = "academia";
// // query = "assign a numerical rating from 0 to 10 for how closely the following words relate to the word '" + keyword + "': 'fitness, baggy, soft, books'. Return the words sorted by their values as a two dimensional array." 
// async function respond(keyword, array) {
  
//     const response = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: "assign a numerical rating from 0 to 10 for how closely the following words relate to the word '" + keyword + "': '" + stringer(array) + "'. Return the words sorted by their values as a two dimensional array." ,
//         temperature: 0.43,
//         max_tokens: 256,
//         top_p: 1,
//         frequency_penalty: 0,
//         presence_penalty: 0,
//     });

//     console.log("Response is " + response.data.choices[0].text);

//     return response;
// }

// respond("academia", ["sport", "book", "apple"]);



