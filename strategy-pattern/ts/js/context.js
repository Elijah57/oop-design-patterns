"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AIContext = /** @class */ (function () {
    function AIContext(model) {
        this.model = model;
    }
    AIContext.prototype.switchModel = function (model) {
        this.model = model;
    };
    AIContext.prototype.processInput = function () {
        return this.model.generateResponse();
    };
    return AIContext;
}());
exports.default = AIContext;
