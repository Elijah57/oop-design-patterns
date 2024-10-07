"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGPTStrategy = exports.GeminiStrategy = exports.BardStrategy = void 0;
var strategyInterface_1 = require("./strategyInterface");
var BardStrategy = /** @class */ (function (_super) {
    __extends(BardStrategy, _super);
    function BardStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BardStrategy.prototype.generateResponse = function () {
        console.log("I am bard, and this is my implementation of generateresponse");
    };
    return BardStrategy;
}(strategyInterface_1.default));
exports.BardStrategy = BardStrategy;
var GeminiStrategy = /** @class */ (function (_super) {
    __extends(GeminiStrategy, _super);
    function GeminiStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GeminiStrategy.prototype.generateResponse = function () {
        console.log("I am Gemini, and this is my implementation of generateResponse");
    };
    return GeminiStrategy;
}(strategyInterface_1.default));
exports.GeminiStrategy = GeminiStrategy;
var ChatGPTStrategy = /** @class */ (function (_super) {
    __extends(ChatGPTStrategy, _super);
    function ChatGPTStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChatGPTStrategy.prototype.generateResponse = function () {
        console.log("I am ChatGPT, and this is my implementatiion of generateResponse");
    };
    return ChatGPTStrategy;
}(strategyInterface_1.default));
exports.ChatGPTStrategy = ChatGPTStrategy;
