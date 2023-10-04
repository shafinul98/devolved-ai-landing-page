import { Schema, models, model } from "mongoose";

const BlogSchema = new Schema({
  title: String,
  slug: String,
  description: String,
  image: String,
});

export default models.Blog ?? model("Blog", BlogSchema);
