import { BardStrategy, GeminiStrategy, ChatGPTStrategy } from "./concreteStrategies";
import AIContext from "./context";

const bard = new BardStrategy();
const bardAiModel = new AIContext(bard);

console.log(bardAiModel.processInput())

const gemini = new GeminiStrategy();
const geminiAiModel = new AIContext(gemini);

console.log(geminiAiModel.processInput())

const chatgpt = new ChatGPTStrategy();
const chatgptAiModel = new AIContext(chatgpt);

console.log(chatgptAiModel.processInput())