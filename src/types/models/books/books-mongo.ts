import { Schema } from "mongoose";
import { Book } from "./books";

export const BookSchemaMongo = new Schema<Book>(
  {
    uuid: { type: String, required: true, unique: true },
    user: { type: String, required: true },
    institution: { type: String},
    title: { type: String, required: true },
    author: { type: String, required: true},
    editorial: { type: String, required: true },
    amount: { type: Number, required: true },
    state: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
