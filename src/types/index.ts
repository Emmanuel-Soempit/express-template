import 'express-session';

export interface UserType {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}



declare module 'express-session' {
    interface SessionData {
        userId: number; // Adjust the type based on your actual data type (e.g., number, string, etc.)
        // Add any other session properties here
    }
}
