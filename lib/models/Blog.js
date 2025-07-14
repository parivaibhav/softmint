import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
  excerpt: String,
  author: String,
  date: {
    type: Date,
    default: Date.now,
  },
  image: String, // stores the image filename or URL
  imageId: String, // stores the uuid for the image
  tag: String,
});

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema); 