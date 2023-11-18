import { config } from "dotenv"
config()

import { Configuration, OpenAIAPI } from "openai"

const openai = new OpenAIAPI(new Configuration({
    apiKey: process.env.API_KEY
}))

openai.createChatCompletion({
    model: "gpt-4-1106-preview",
    messages: [ { role: "user", content: "Hello ChatGPT"}]
}).then(res => {
    console.log(res)
}) 