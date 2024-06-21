/**
 * This module creates the application instance.
 * The actual server logic is contained within the server.ts file.
 */
import express, { NextFunction, Request, Response } from "express";
import logger from "./config/logger.js";
import { HttpError } from "http-errors";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

/**
 * Global error handler middleware.
 * This should be the last middleware in the stack.
 * It standardizes the error response format.
 *
 * @param {unknown} err - The error object.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function in the stack.
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message);

    /**
     * Whatever errors we return from the server to the client should always
     * be in the same format throughout the application. Client doesn't have to * worry to write custom logic for every error that comes from the server.
     */

    /**
     * The format that we are going to use for sending errors to the client will be of a validation library. The validation library that we are going to use in our project sends data in the format that is used in the given code snippet.
     */
    const statusCode = res.statusCode || 500;
    res.status(statusCode).json({
        errors: [
            {
                type: err.name,
                msg: err.message,
                path: "",
                location: "",
            },
        ],
    });
});
export default app;
