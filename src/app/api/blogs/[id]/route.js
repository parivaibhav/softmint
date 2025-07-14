import { connectToDatabase } from '../../../../../lib/mongodb';
import Blog from '../../../../../lib/models/Blog';

export async function GET(req, { params }) {
  await connectToDatabase();
  const blog = await Blog.findById(params.id);
  if (!blog) {
    return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
  }
  return new Response(JSON.stringify(blog), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function PUT(req, { params }) {
  await connectToDatabase();
  const data = await req.json();
  const blog = await Blog.findByIdAndUpdate(params.id, data, { new: true });
  if (!blog) {
    return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
  }
  return new Response(JSON.stringify(blog), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function DELETE(req, { params }) {
  await connectToDatabase();
  const blog = await Blog.findByIdAndDelete(params.id);
  if (!blog) {
    return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
  }
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
} 