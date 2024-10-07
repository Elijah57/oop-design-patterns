# Strategy Pattern Design

Strategy Design Pattern is a behaviourial pattern that allows the behaviour of an object to be selected dynamically at runtime. It follows a open/close principle by allowing clients to switch algorithms dynamically without altering the code structure. 

Analogy (where a strategy pattern fits the most)

Let say, you are building an AI-driven web application that performs a set of tasks for the users using an AI model. But, in this case, you want your application to be decoupled from the AI models, in the sense that it could perform those set of task with different AI models (chatGPT, gemini, claude, a custom model). i.e an AI model is not tightly-coupled with your application and there is flexibility to use different AI models without altering the code structure of your application (rewriting the entire logic for your Application-AI-Logic)

# How Strategy Patterns fits this analogy

The idea of strategy pattern involves defining a family of algorithms (Strategy Interface). Encapsulating each algorithm into seperate classes, i.e strategies. Each strategy encapsulates a specific algorithm or behavoiur, allowing for clean and modular way to manage different variations or implementation. Providing a context, to switch between the different algorithms (strategies). It enables client (our application), to switch between different strategies at runtime.

# Components of a Strategy Design Pattern

1. Strategy Interface: It is an interface or abstract class that defines a set of methods that all concrete strategies must implement. i.e (all AI model must have a method generateResponse()). 

2. Concrete Strategies: The various implementation of the Strategy Interface. i.e each concrete strategy is specific algorithm for performing the task defined by Strategy Interface. i.e ChatGPT, Claude, and Gemini implementation of the methods defined by Strategy Interface (generateResponse)

3. Context: A class that holds reference to a strategy object and delegates task to it. i.e an  interface that allows client (an application), to select different strategy and call its methods to perform task, allowing for interchangeable strategies to be used.

4. Client: The client is responsible for selecting the approximate strategy and providing it to the context.

learn more [Here](https://www.geeksforgeeks.org/strategy-pattern-set-1/)