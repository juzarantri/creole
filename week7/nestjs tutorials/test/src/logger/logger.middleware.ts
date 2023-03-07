import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  /// creating the middleware using class 
  use(req: Request, res: Response, next: NextFunction) {
    console.log("Request...");
    next();
  }
}
