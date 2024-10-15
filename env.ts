import dotenv from 'dotenv'
dotenv.config()

const requiredEnv = (key: string): string => {
    const value = process.env[key];
    if (!value) {
      throw new Error(`Environment variable ${key} is required`);
    }
    return value;
  };
  
  // Define types for your environment variables
  interface EnvVariables {
    NODE_ENV: 'development' | 'production' | 'test';
    PORT: number;
    DATABASE_URL: string;
    REDIS_PORT: number;
    REDIS_HOST: string;
    JWT_TOKEN: string
  }
  
  // Load and validate environment variables
  const env: EnvVariables = {
    NODE_ENV: requiredEnv('NODE_ENV') as 'development' | 'production' | 'test',
    PORT: Number(requiredEnv('PORT')),
    DATABASE_URL: requiredEnv('DATABASE_URL') as string,
    REDIS_PORT: Number(requiredEnv('REDIS_PORT')),
    REDIS_HOST: requiredEnv('REDIS_HOST') as string,
    JWT_TOKEN: requiredEnv('JWT_TOKEN') as string
  };

  export default env;
  