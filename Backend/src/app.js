import express from 'express';
import cors from "cors"

export const app = express()

// setup middlewares 

app.use(express.json());

app.use(express.urlencoded({
    extended:true
}));

app.use(cors({
    origin: process.env.ORIGIN,
    methods: process.env.ALLOWED_METHODS
}));

