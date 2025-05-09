import express from "express";
import { getBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);
router.get("/all-books", getAllBook);


export default router;
