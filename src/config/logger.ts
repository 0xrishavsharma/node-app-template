import winston from "winston";
import env from "./env";

const logger = winston.createLogger({
    level: "info",
    defaultMeta: {
        serviceName: "feast-finder-auth-service",
    },
    transports: [
        new winston.transports.File({
            level: "info",
            filename: "logs/combined.log",
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json(),
            ),
            silent: env.NODE_ENV === "test",
        }),

        new winston.transports.File({
            level: "error",
            filename: "logs/error.log",
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json(),
            ),
            silent: env.NODE_ENV === "test",
        }),

        new winston.transports.Console({
            level: "info",
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.colorize(),
                winston.format.simple(),
            ),
            silent: env.NODE_ENV === "test",
        }),
    ],
});

export default logger;
