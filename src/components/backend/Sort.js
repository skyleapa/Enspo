const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "butts",
});
const openai = new OpenAIApi(configuration);

function stringer(arr) {
  theString = ""
  for (let i = 0; i < arr.length;i++) {
    theString = arr[i] + ", " + theString;
  }
  return theString
}

async function respond(keyword, array) {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "assign a numerical rating from 0 to 10 for how closely the following words relate to the word '" + keyword + "': '" + stringer(array) + "'. Return the average of these values." ,
        temperature: 0.43,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });

    // console.log("Response is " + response.data.choices[0].text);

    return response.data.choices[0].text;
}

// "beach", ["cool", "clear sky", "edgy"]
function avgGenerator(keyword, tags) {
  arrResponse = respond(keyword, tags);

  // console.log(arrResponse);

  arrResponse.then(function(result) {
    // console.log(result)
    // console.log(typeof(result));
    var final = parseInt(result);
    console.log(final);
    // console.log(typeof(final));
    return final;
  })
}

console.log(avgGenerator("beach", ["cool", "clear sky", "edgy"]));








