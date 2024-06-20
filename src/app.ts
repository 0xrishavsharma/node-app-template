// We'll create the application instance in this file but the actual server logic will be in the server.ts file.
import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

export default app;
