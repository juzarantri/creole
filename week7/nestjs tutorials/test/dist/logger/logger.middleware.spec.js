"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_middleware_1 = require("./logger.middleware");
describe('LoggerMiddleware', () => {
    it('should be defined', () => {
        expect(new logger_middleware_1.LoggerMiddleware()).toBeDefined();
    });
});
