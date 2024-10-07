
import AIStrategyInterface from "./strategyInterface";

class AIContext {
    private model: AIStrategyInterface;

    constructor(model: AIStrategyInterface){
        this.model = model
    }

    switchModel(model: AIStrategyInterface){
        this.model = model
    }

    processInput(){
        return this.model.generateResponse()
    }
}


export default AIContext;