import {config} from "dotenv";
config()

// console.log(process.env.API_KEY);

import { Configuration, OpenAIApi } from "openai";

const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.API_KEY
}));

openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: "Hello AI I am going to learn prompt Engineering using You"}],
})
.then(res=>{
    console.log(res.data.choices[0].message.content)
})

