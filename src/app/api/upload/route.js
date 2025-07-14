import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import { IncomingForm } from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
  await fs.mkdir(uploadsDir, { recursive: true });

  const form = new IncomingForm({ multiples: false, uploadDir: uploadsDir, keepExtensions: true });

  return new Promise((resolve, reject) => {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return resolve(NextResponse.json({ error: 'Upload failed' }, { status: 500 }));
      }
      const file = files.image;
      if (!file) {
        return resolve(NextResponse.json({ error: 'No file uploaded' }, { status: 400 }));
      }
      const fileName = path.basename(file.filepath);
      const fileUrl = `/uploads/${fileName}`;
      resolve(NextResponse.json({ url: fileUrl }, { status: 200 }));
    });
  });
} 