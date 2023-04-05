// src/mirage/client.js
import { createServer } from "miragejs";
import { makeServer } from "./server";

if (process.env.NODE_ENV === "development") {
  createServer({
    ...makeServer({ environment: "development" }),
  });
}
