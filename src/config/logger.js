import winston from "winston";

const { combine, timestamp, json } = winston.format;

export const logger = winston.createLogger({
  level: "info",
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.File({
      dirname: "logs",
      filename: "log",
      maxsize: 1000000,
      maxFiles: 2,
    }),
    new winston.transports.Console(),
  ],
});
