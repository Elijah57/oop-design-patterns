import AIStrategyInterface from "./strategyInterface";

export class BardStrategy extends AIStrategyInterface{

    generateResponse(){
        console.log("I am bard, and this is my implementation of generateresponse")
    }
}

export class GeminiStrategy extends AIStrategyInterface{
    generateResponse(){
        console.log("I am Gemini, and this is my implementation of generateResponse")
    }
}

export class ChatGPTStrategy extends AIStrategyInterface{
    generateResponse(){
        console.log("I am ChatGPT, and this is my implementatiion of generateResponse")
    }
}

