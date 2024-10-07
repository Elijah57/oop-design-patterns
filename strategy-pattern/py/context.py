from strategy_interface import StrategyInterface


class Context:

    def __init__(self, model: StrategyInterface) -> None:
        self._model = model

    def switch_model(self, model: StrategyInterface):
        self._model = model

    def process_input(self):
        return self._model.generateResponse()

    