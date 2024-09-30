import fs from 'fs';
import path from 'path';
import {  NextResponse } from 'next/server';

export async function GET() {
  const filePath = path.resolve('.', 'data', 'posts', 'post1.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return new NextResponse(fileContents, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
