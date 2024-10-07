from context import Context
from concrete_strategies import BardStrategy, GeminiStrategy, ChatgptStrategy


bard = BardStrategy()
bard_ai = Context(bard)
print(bard_ai.process_input())


gemini = GeminiStrategy()
gemini_ai = Context(gemini)
print(gemini_ai.process_input())


chatgpt = ChatgptStrategy()
chat_ai = Context(chatgpt)
print(chat_ai.process_input())