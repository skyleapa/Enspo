const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "hi",
});
const openai = new OpenAIApi(configuration);

async function respond() {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "assign a numerical rating from 0 to 10 for how closely the following words relate to the word 'academia': 'fitness, baggy, soft, books'. Return the words sorted by their values as a two dimensional array.",
        temperature: 0.43,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });

    console.log("Response is " + response.data.choices[0].text);

    return response;
}

respond();

