from strategy_interface import StrategyInterface

class BardStrategy(StrategyInterface):

    def __init__(self) -> None:
        super().__init__()

    def generateResponse(self):
        print("This is bard implementation of generateResponse")

class GeminiStrategy(StrategyInterface):

    def __init__(self) -> None:
        super().__init__()

    def generateResponse(self):
        print("This is Gemini implementation of generateResponse")

class ChatgptStrategy(StrategyInterface):

    def __init__(self) -> None:
        super().__init__()

    def generateResponse(self):
        print("This is ChatGPT implementation of generateResponse")