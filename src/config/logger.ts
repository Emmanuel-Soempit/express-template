// app/logger.js
import winston from 'winston';
require('winston-daily-rotate-file');

// Create a Winston logger with the daily rotate file transport
const logger = winston.createLogger({
  level: 'info', // Set the log level
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()  // Output logs in JSON format
  ),
  transports: [
    new winston.transports.Console(), // Log to console
    new winston.transports.DailyRotateFile({
      filename: 'logs/application-%DATE%.log',  // Log file pattern (with date)
      datePattern: 'YYYY-MM-DD',                // Rotate daily based on date
      zippedArchive: true,                      // Compress old logs (gzip)
      maxSize: '20m',                           // Maximum log file size before rotating
      maxFiles: '14d'                           // Keep logs for the last 14 days
    })
  ]
});

// Export the logger so it can be used elsewhere in the app
export default logger;
