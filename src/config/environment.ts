import dotenv from "dotenv";
import path from "path";

const environment = process.env.ENV || "local";

const envFiles: Record<string, string> = {
    local: ".env",
    qa: ".env.qa",
    stage: ".env.stage",
    prod: ".env.prod"
};

dotenv.config({
    path: path.resolve(process.cwd(), envFiles[environment])
});

export const config = {

    baseURL: process.env.BASE_URL!,

    apiURL: process.env.API_URL!,

    username: process.env.USERNAME!,

    password: process.env.PASSWORD!

};