import dotenv from "dotenv";
import path from "path";

const environment = process.env.ENV || "local";

const envFiles: Record<string, string> = {
    local: ".env",
    qa: ".env.qa",
    stage: ".env.stage",
    production: ".env.prod"
};

// Only load dotenv if CI hasn't already injected the variables
if (!process.env.CI) {
    dotenv.config({
        path: path.resolve(process.cwd(), envFiles[environment])
    });
}

const requiredVariables = [
    "BASE_URL",
    "API_URL",
    "USERNAME",
    "PASSWORD"
];

for (const variable of requiredVariables) {
    if (!process.env[variable]) {
        throw new Error(
            `Missing required environment variable: ${variable}`
        );
    }
}

export const config = {
    baseURL: process.env.BASE_URL!,
    apiURL: process.env.API_URL!,
    username: process.env.USERNAME!,
    password: process.env.PASSWORD!
};