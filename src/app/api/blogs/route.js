import { connectToDatabase } from '../../../../lib/mongodb';
import Blog from '../../../../lib/models/Blog';

export async function GET() {
  await connectToDatabase();
  const blogs = await Blog.find({}).sort({ date: -1 });
  return new Response(JSON.stringify(blogs), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(req) {
  await connectToDatabase();
  const data = await req.json();
  const blog = await Blog.create(data);
  return new Response(JSON.stringify(blog), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
} 