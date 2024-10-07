

# Strategy Pattern Design

The **Strategy Design Pattern** is a behavioral design pattern that allows the behavior of an object to be selected dynamically at runtime. It adheres to the **Open/Closed Principle** by enabling clients to switch algorithms without altering the underlying code structure.

## Analogy (Where the Strategy Pattern Fits Best)

Imagine you are building an AI-driven web application that performs a set of tasks for users using various AI models. In this scenario, you want your application to be decoupled from the AI models, allowing it to utilize different models (like ChatGPT, Gemini, Claude, or a custom model). This means the AI model is not tightly coupled with your application, providing the flexibility to switch models without rewriting the entire application logic.

## How the Strategy Pattern Fits This Analogy

The essence of the Strategy Pattern involves defining a family of algorithms (the **Strategy Interface**) and encapsulating each algorithm in separate classes, known as **Strategies**. Each strategy encapsulates a specific algorithm or behavior, allowing for a clean and modular approach to managing different implementations. The **Context** provides the ability to switch between different algorithms (strategies), enabling the client (our application) to select and use various strategies at runtime.

## Components of a Strategy Design Pattern

1. **Strategy Interface:** This is an interface or abstract class that defines a set of methods that all concrete strategies must implement. For example, all AI models must have a method like `generateResponse()`.

   **Example**
   ```typescript
   class AIStrategyInterface {
       generateResponse() {
           // Implementation to be provided by concrete strategies
       }
   }

   export default AIStrategyInterface;
   ```

2. **Concrete Strategies:** These are the specific implementations of the Strategy Interface. Each concrete strategy represents a specific algorithm for performing the tasks defined by the Strategy Interface. For instance, implementations for ChatGPT, Claude, and Gemini would each provide their versions of the `generateResponse()` method.

   **Example**
   ```typescript
   import AIStrategyInterface from "./strategyInterface";

   export class BardStrategy extends AIStrategyInterface {
       generateResponse() {
           console.log("I am Bard, and this is my implementation of generateResponse.");
       }
   }

   export class GeminiStrategy extends AIStrategyInterface {
       generateResponse() {
           console.log("I am Gemini, and this is my implementation of generateResponse.");
       }
   }

   export class ChatGPTStrategy extends AIStrategyInterface {
       generateResponse() {
           console.log("I am ChatGPT, and this is my implementation of generateResponse.");
       }
   }
   ```

3. **Context:** This class holds a reference to a strategy object and delegates tasks to it. It serves as an interface that allows the client (the application) to select different strategies and call their methods to perform tasks, thereby enabling interchangeable strategies.

   **Example**
   ```typescript
   import AIStrategyInterface from "./strategyInterface";

   class AIContext {
       private model: AIStrategyInterface;

       constructor(model: AIStrategyInterface) {
           this.model = model;
       }

       switchModel(model: AIStrategyInterface) {
           this.model = model;
       }

       processInput() {
           return this.model.generateResponse();
       }
   }

   export default AIContext;
   ```

4. **Client:** The client is responsible for selecting the appropriate strategy and providing it to the context.

   **Example**
   ```typescript
   import { BardStrategy, GeminiStrategy, ChatGPTStrategy } from "./concreteStrategies";
   import AIContext from "./context";

   const bard = new BardStrategy();
   const bardAiModel = new AIContext(bard);
   console.log(bardAiModel.processInput());

   const gemini = new GeminiStrategy();
   const geminiAiModel = new AIContext(gemini);
   console.log(geminiAiModel.processInput());

   const chatgpt = new ChatGPTStrategy();
   const chatgptAiModel = new AIContext(chatgpt);
   console.log(chatgptAiModel.processInput());
   ```

To wrap this up, I implemented the Strategy Pattern for the given analogy in this article. The current project I am working on requires the use of AI models to process user input, but I had to address the challenge of switching between different AI models due to their performance in various applications without rewriting the application logic each time I switch models. The Strategy Pattern perfectly fits this application, allowing me to decouple the application from the AI models.

I will update this article when I finish the project, so stay tuned. Check out [my repo](https://github.com/Elijah57/oop-design-patterns) on OOP design patterns. To learn more about the Strategy Pattern, visit [here](https://www.geeksforgeeks.org/strategy-pattern-set-1/).

---
