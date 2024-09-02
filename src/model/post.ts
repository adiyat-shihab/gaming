import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const Post = mongoose.models?.post || mongoose.model("post", postSchema);

export default Post;
